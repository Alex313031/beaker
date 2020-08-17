import {css} from 'beaker://app-stdlib/vendor/lit-element/lit-element.js'
import commonCSS from 'beaker://app-stdlib/css/common.css.js'
import buttonsCSS from 'beaker://app-stdlib/css/buttons2.css.js'
import tooltipCSS from 'beaker://app-stdlib/css/tooltip.css.js'
import spinnerCSS from 'beaker://app-stdlib/css/com/spinner.css.js'

const cssStr = css`
${commonCSS}
${buttonsCSS}
${tooltipCSS}
${spinnerCSS}

:host {
  display: block;
}

.hidden {
  display: none !important;
}

input:focus {
  border-color: var(--border-color--focused);
  box-shadow: 0 0 2px #7599ff77;
}

#topleft {
  position: absolute;
  top: 60px;
  left: calc(50vw - 685px);
  z-index: 11;
  display: flex;
  align-items: center;
}

#topright {
  position: absolute;
  top: 10px;
  right: 10px;
}

#topright a {
  margin-left: 10px;
  font-size: 12px;
  opacity: 0.85;
}

#topright a span {
  opacity: 0.8;
  font-size: 11px;
}

@media (max-width: 1040px) {
  #topright {
    right: 15px;
    top: 62px;
  }
}

.release-notice {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 60px;
  padding: 12px 18px;
  border: 1px solid var(--border-color--default);
  font-size: 14px;
  letter-spacing: 0.5px;
  border-radius: 4px;
}

.release-notice .view-release-notes:hover {
  text-decoration: underline;
}

.release-notice .fa-rocket {
  margin-right: 5px;
}

.release-notice .close {
  color: var(--text-color--very-light);
  float: right;
}

header {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: content-box;
}

.search-ctrl {
  display: flex;
  position: relative;
  height: 34px;
  margin: 16px 0 0;
  z-index: 5;
}

.search-ctrl .fa-search,
.search-ctrl .spinner {
  position: absolute;
  z-index: 2;
  font-size: 13px;
  top: 11px;
  left: 14px;
  color: #99a;
}

.search-ctrl .spinner {
  top: 10px;
}

.search-ctrl input {
  position: relative;
  top: -1px;
  background: var(--bg-color--default);
  color: inherit;
  box-sizing: border-box;
  height: 36px;
  flex: 1;
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 500;
  padding: 0 0 0 36px;
  border: 1px solid var(--border-color--default);
  border-radius: 24px;
}

.search-ctrl input:focus {
  border-color: var(--border-color--focused);
  box-shadow: 0 0 2px #7599ff77;
}

.search-ctrl button {
  padding: 8px 14px;
  margin-left: 10px;
}

.search-ctrl .clear-search {
  position: absolute;
  left: -26px;
  top: 7px;
  z-index: 1;
  display: flex;
  background: var(--bg-color--semi-light);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.search-ctrl .clear-search span {
  margin: auto;
}

@media (max-width: 900px) {
  .search-ctrl .clear-search  {
    left: unset;
    right: 98px;
  }
}

nav {
  display: flex;
  margin: 4px 0 0;
}

nav a.nav-item {
  display: block;
  font-weight: 400;
  color: var(--text-color--light);
  cursor: pointer;
  font-size: 12px;
  padding: 10px 8px;
  margin-right: 12px;
  border-bottom: 2px solid transparent;
}

nav a.nav-item:hover {
  color: var(--text-color--nav--highlight);
}

nav a.nav-item.active {
  color: var(--text-color--nav--highlight);
  border-bottom: 2px solid var(--blue);
}

nav a.nav-item :-webkit-any(.fas, .far) {
  color: var(--text-color--light);
  font-size: 13px;
  margin-right: 2px;
}

nav a.nav-item.notice { 
  position: relative;
  font-weight: bold;
}

nav a.nav-item.notice:before {
  content: '';
  background: var(--bg-color--nav-count);
  border: 1px solid var(--bg-color--default);
  position: absolute;
  top: 10px;
  left: 17px;
  width: 7px;
  height: 7px;
  z-index: 1;
  border-radius: 50%;
}

nav hr {
  border: 0;
  border-left: 1px solid var(--border-color--semi-light);
  margin: 10px 12px 10px 0;
}

@media (max-width: 600px) {
  nav .label {
    display: none;
  }
}

.pins {
  position: relative;
  display: grid;
  margin: 30px auto 0;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15px;
  width: 100%;
  max-width: 1000px;
  user-select: none;
}

.pin {
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  color: inherit;
  border-radius: 3px;
  overflow: hidden;
  user-select: none;
  min-height: 100px;
}

.pin:hover {
  text-decoration: none;
}

.pin .thumb {
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  width: 100px;
  height: 70px;
  line-height: 70px;
  object-fit: cover;
  object-position: top center;
  border: 1px solid var(--border-color--default);
}

.pin:hover .thumb {
  border-color: #889;
}

.pin .details {
  padding: 10px 2px 10px;
}

.pin .details > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pin .title {
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}

.pin.add {
  font-size: 21px;
  color: rgba(0, 0, 150, 0.35);
  cursor: pointer;
}

.pin.add .thumb {
  background: var(--bg-color--semi-light);
  border: 0;
}

.pin.add:hover {
  color: rgba(0, 0, 150, 0.5);
}

@media (prefers-color-scheme: dark) {
  .pin.add {
    color: #89899e;
  }
  
  .pin.add:hover {
    color: #aeaec1;
  }
}

main {
  border-top: 1px solid var(--border-color--light);
}

.views > * {
  display: block;
  padding: 0 10px;
  height: calc(100vh - 93px);
  overflow: auto;
}

.all-view h2 {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 4px 4px;
  box-sizing: border-box;
  font-weight: 500;
  color: var(--text-color--light);
  letter-spacing: 0.7px;
  font-size: 15px;
  border-bottom: 1px solid var(--border-color--light);
}

.all-view h2 a:hover {
  cursor: pointer;
  text-decoration: underline;
}

.onecol {
  margin-top: 10px;
}

.twocol {
  margin: 10px auto 20px;
  max-width: 1000px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 30px;
}

.twocol .sidebar > div {
  position: sticky;
  top: 0px;
  padding-top: 10px;
}

.twocol .sidebar h3 {
  box-sizing: border-box;
  letter-spacing: 0.7px;
  margin: 3px 0;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 11px;
  color: var(--text-color--very-light);
}

.twocol .sidebar section {
  margin-bottom: 30px;
}

@media (max-width: 900px) {
  .twocol {
    display: block;
  }
  .twocol > :first-child {
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
  }
  .twocol > :last-child {
    display: none;
  }
}

.twocol .sidebar .quick-links h3 {
  margin-bottom: 5px;
}

.quick-links a {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  letter-spacing: 0.5px;
  padding: 4px 4px;
  color: var(--text-color--default);
}

.quick-links a:hover {
  text-decoration: underline;
}

.quick-links a img {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
}

.quick-links a :-webkit-any(.far, .fas) {
  width: 16px;
  margin-right: 8px;
  color: var(--text-color--light);
}

.quick-links a img.favicon {
  image-rendering: -webkit-optimize-contrast;
  border-radius: 0;
}

.suggested-sites .site {
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  background: var(--bg-color--light);
}

.suggested-sites .site .title a {
  color: var(--text-color--result-link);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.suggested-sites .site .subscribers a {
  color: var(--text-color--pretty-light);
}

.suggested-sites .site button {
  float: right;
  font-size: 11px;
  letter-spacing: 0.5px;
}

.tags {
}

.tags a {
  display: inline-block;
  color: var(--text-color--light);
  background: var(--bg-color--semi-light);
  padding: 1px 6px 2px;
  font-size: 12px;
  border-radius: 4px;
  letter-spacing: 0.3px;
  margin-bottom: 4px;
}


.intro {
  position: relative;
  max-width: 1000px;
  margin: 16px auto;
  text-align: center;
  border: 1px solid var(--border-color--default);
  border-radius: 4px;
}

.intro .close {
  position: absolute;
  top: 10px;
  right: 16px;
  font-size: 16px;
}

.intro h3 {
  font-size: 46px;
  font-weight: 500;
  letter-spacing: 0.7px;
  margin-bottom: 0;
}

.intro h4 {
  font-size: 18px;
}

.intro h5 {
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 40px;
}

.intro a {
  color: var(--blue);
  cursor: pointer;
}

.intro a:hover {
  text-decoration: underline;
}

.intro .col1,
.intro .col3 {
  margin: 30px 0;
}

.intro .col3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 860px;
  margin: 30px auto;
}

.intro .col1 {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-color--light);
  margin: 30px;
  border-radius: 4px;
}

.intro .avatar img,
.intro .icon {
  display: block;
  margin: 0 auto 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.intro .icon {
  background: var(--bg-color--light);
  font-size: 36px;
  line-height: 100px;
  color: inherit;
}

.intro .col1 .icon {
  margin: 0; 
}

.legacy-archives-notice {
  max-width: 1000px;
  margin: 16px auto;
  padding: 18px 22px;
  font-size: 15px;
  border: 1px solid var(--border-color--default);
  border-radius: 4px;
}

.legacy-archives-notice summary {
  cursor: pointer;
  outline: 0;
}

.legacy-archives-notice a {
  color: var(--blue);
  cursor: pointer;
}

.legacy-archives-notice a:hover {
  text-decoration: underline;
}

.legacy-archives-notice .archives {
  margin-top: 10px;
}

.legacy-archives-notice .archive {
  display: flex;
  align-items: center;
  padding: 5px 0;
  border-top: 1px solid #ccd;
}

.legacy-archives-notice .archive:hover {
  background: #fafafd;
}

.legacy-archives-notice .archive a {
  margin-right: auto;
}

`
export default cssStr