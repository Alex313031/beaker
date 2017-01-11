/*
This uses the datInternalAPI API, which is exposed by webview-preload to all archives loaded over the beaker: protocol
*/

import * as yo from 'yo-yo'
import co from 'co'
import Archive from '../model/archive'
import ArchivesList from '../model/archives-list'
import { render as renderArchivesList } from '../com/archives-list'
import { render as renderArchiveView } from '../com/archive-view'
import { pushUrl } from '../../lib/fg/event-handlers'
import { ucfirst } from '../../lib/strings'

// globals
// =

var viewError = null
var archivesList = null
var selectedArchiveKey = null
var selectedArchive = null
var isViewActive = false

// exported API
// =

export function setup () {
}

export function show (isSameView) {
  viewError = false
  isViewActive = true
  document.title = 'Library'

  co(function * () {
    var newArchiveKey = getURLKey()
    setSiteInfoOverride(newArchiveKey)
    if (isSameView && selectedArchiveKey === newArchiveKey) {
      // a navigation within the same view
      return handleInnerNavigation()
    }

    // load the archive list, if needed
    if (!archivesList) {
      archivesList = new ArchivesList()
      yield archivesList.setup({filter: {isSaved: true}})
      archivesList.on('changed', render)
    }

    // update the archive, as needed
    if (newArchiveKey !== selectedArchiveKey) {
      if (selectedArchive) {
        selectedArchive.destroy()
        selectedArchive = null
      }
      if (newArchiveKey) {
        selectedArchive = new Archive()
        yield selectedArchive.fetchInfo(newArchiveKey)
        selectedArchive.on('changed', render)
        setCurrentNodeByPath()
      }
      selectedArchiveKey = newArchiveKey
    }

    render()

    // TODO
    // if (archive.info.isOwner) {
    //   dragDrop('.window', onDragDrop)
    // }

    // TODO
    // now that it has loaded, redirect to dat:// if this was a timeout view
    // if (window.location.hash === '#timeout') {
    //   var destURL = 'dat://' + /^archive\/(.*)/.exec(window.location.pathname)[1]
    //   console.log('Archive found! Redirecting to', destURL)
    //   window.location = destURL
    //   return
    // }

    // run the tour if this is the owner's first time
    // TODO
    // const tourSeenSetting = 'has-seen-viewdat-tour'
    // var hasSeenTour = false
    // try { hasSeenTour = yield datInternalAPI.getGlobalSetting(tourSeenSetting) }
    // catch (e) {}
    // if (!hasSeenTour) {
    //   helpTour.startViewDatTour(archive.info.isOwner, render, true)
    //   yield datInternalAPI.setGlobalSetting(tourSeenSetting, true)
    // }
  }).catch(err => {
    // render the error state
    console.warn('Failed to fetch archive info', err)
    viewError = err
    render()
  })
}

export function hide (isSameView) {
  if (isSameView && selectedArchiveKey === getURLKey()) {
    // do nothing, it's a navigation within the current archive's folder structure
    return
  }

  isViewActive = false
  setSiteInfoOverride(false)
  if (archivesList) archivesList.destroy()
  if (selectedArchive) selectedArchive.destroy()
  archivesList = null
  selectedArchiveKey = null
  selectedArchive = null
}

// view state management
// =

// called when there's a navigation that doesnt change the current archive
function handleInnerNavigation () {
  setCurrentNodeByPath()
  render()
}

function getURLKey () {
  var path = window.location.pathname
  if (path.startsWith('archives')) return false
  try {
    // extract key from url
    return /^archive\/([0-9a-f]{64})/.exec(path)[1]
  } catch (e) {
    console.error('Failed to parse URL', e)
    return false
  }
}

function getURLPath () {
  try {
    return window.location.pathname.split('/').slice(2).join('/') // drop 'archive/{key}', take the rest
  } catch (e) {
    return ''
  }
}

// override the site info in the navbar
function setSiteInfoOverride (archiveKey) {
  if (archiveKey) {
    window.locationbar.setSiteInfoOverride({
      title: 'Site Library',
      url: `dat://${archiveKey}/${getURLPath()}${window.location.hash}`
    })
  } else {
    window.locationbar.setSiteInfoOverride(false)    
  }
}

// use the current url's path to set the current rendered node
function setCurrentNodeByPath () {
  var names = window.location.pathname.split('/').slice(2) // drop 'archive/{name}', take the rest
  selectedArchive.files.setCurrentNodeByPath(names)
}

// rendering
// =

export function render () {
  if (!isViewActive) {
    return
  }

  // render view
  yo.update(document.querySelector('#el-content'), yo`<div class="pane" id="el-content">
    <div class="archives">
      ${renderArchivesList(archivesList, {selectedArchiveKey})}
      ${renderArchiveView(selectedArchive, {viewError})}
    </div>
  </div>`)
}
