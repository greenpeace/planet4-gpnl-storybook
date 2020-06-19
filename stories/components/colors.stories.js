import '!style-loader!css-loader!sass-loader!../../vendor/greenpeace/planet4-child-theme-netherlands/assets/css/scss/style.scss';
import docs from './colors_docs.mdx';

let style = document.createElement('style');
style.innerHTML = `
    html, body {
    background-color: white;
    }
    
    .color-square {
    width: 200px;
    min-height: 60px;
    display: inline-block;
    padding: 5px;
    }
    `;

document.head.appendChild(style);

export const WebColors = () =>
    `
<h1>Web Colors</h1>

<h2 style="margin: 32px 0 6px">Primary</h2>
<div style="display: flex">
<div class="color-square" style="background-color: #66cc00">light green <br> #66cc00</div>
<div class="color-square" style="background-color: #003300; color: white">dark green <br> #003300</div>
<div class="color-square" style="background-color: #f36d3a; color: white">orange <br> #f36d3a</div>
<div class="color-square" style="background-color: #ffffff">white <br> #ffffff</div>
<div class="color-square" style="background-color: #000000; color: white">black <br> #000000</div>
</div>

<h2 style="margin: 32px 0 6px">Secondary</h2>
<div style="display: flex">
<div class="color-square" style="background-color: #323842; color: white">anthracite <br> #323842</div>
<div class="color-square" style="background-color: #5c6978; color: white">slate grey <br> #5c6978</div>
<div class="color-square" style="background-color: #6a6a6a; color: white">dark grey <br> #6a6a6a</div>
<div class="color-square" style="background-color: #9fa1a4; color: black">medium grey <br> #9fa1a4</div>
<div class="color-square" style="background-color: #dadbdc; color: black">light grey <br> #dadbdc</div>
<div class="color-square" style="background-color: #eaeaea; color: black">warm light grey <br> #eaeaea</div>
</div>
<div style="display: flex">
<div class="color-square" style="background-color: #044465; color: white">dark blue <br> #044465</div>
<div class="color-square" style="background-color: #698e9c; color: black">sea blue <br> #698e9c</div>
<div class="color-square" style="background-color: #aec7ca; color: black">sky blue <br> #aec7ca</div>
<div class="color-square" style="background-color: #d7e2e4; color: black">light blue <br> #d7e2e4</div>
</div>

<h2 style="margin: 32px 0 6px">Hover</h2>
<div style="display: flex">
<div class="color-square" style="background-color: #1d8c61; color: white">hover green <br> #1d8c61</div>
<div class="color-square" style="background-color: #ee562d; color: white">hover orange <br> #ee562d</div>
<div class="color-square" style="background-color: #c02a0c; color: white">hover red <br> #c02a0c</div>
</div>
`;

export default {
    title: 'Components/Colors',
    parameters: {docs: {page: docs}},

};


// $anthracite:      #323842;
// $dark-blue:       #044465;
// $slate-grey:      #5c6978;
// $dark-grey:       #6a6a6a;
// $medium-grey:     #9fa1a4;
// $sea-blue:        #698e9c;
// $sky-blue:        #aec7ca;
// $light-blue:      #d7e2e4;
// $light-grey:      #dadbdc;
// $warm-light-grey: #eaeaea;