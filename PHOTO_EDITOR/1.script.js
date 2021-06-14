let videoElem1 = document.querySelector("video");

let cameraBtn = document.querySelector(".camera");
let filesBtn = document.querySelector(".files")
let clickBtn = document.querySelector(".click");
let infoBtn = document.querySelector(".info");
let mensstylesBtn = document.querySelector(".styles");
let accessoriesBtn = document.querySelector(".accessories");
let effectBtn = document.querySelector(".effects");
let editBtn = document.querySelector(".edit");
let adjustBtn = document.querySelector(".adjust");
let filterBtn = document.querySelector(".filters");
let colorBtn = document.querySelector(".colors1");
let hairstyleBtn = document.querySelector(".hairstyleselect");
let mustacheBtn = document.querySelector(".mustacheselect");
let beardBtn = document.querySelector(".beardselect")
let eyebrowBtn = document.querySelector(".eyebrowselect");
let sunglassBtn = document.querySelector(".sunglass_click");
let capsBtn = document.querySelector(".caps_click")
let chainBtn = document.querySelector(".chain_click");
let tieBtn = document.querySelector(".tie_click");
let mensstylebackbutton = document.querySelector(".back-btn1")
let accessoriesbackbutton = document.querySelector(".back-btn2");
let effectbackbutton = document.querySelector(".back-btn3")
let editbackbutton = document.querySelector(".back-btn4");
let informationbackbutton = document.querySelector(".back-btn5");
let flip_horizontalBtn = document.querySelector(".flip_horizontal");
let flip_verticalBtn = document.querySelector(".flip_vertical");
let rotate_leftBtn = document.querySelector(".rotate_left");
let rotate_rightBtn = document.querySelector(".rotate_right");
let greyscale_Btn = document.querySelector(".greyscale");
let resizeBtn = document.querySelector(".resize");

var div1 = document.getElementById("container1");
var div2 = document.getElementById("container2");
var div3 = document.getElementById("container3");
var div4 = document.getElementById("container4");
var div5 = document.getElementById("container5");
var div6 = document.getElementById("container6");
var div7 = document.getElementById("container7");
var div8 = document.getElementById("container8");

var div9 = document.getElementById("adj");
var div10 = document.getElementById("ssc");
var div11 = document.getElementById("hsc");
var div12 = document.getElementById("BE");
var div13 = document.getElementById("job");
var div14 = document.getElementById("twoyrs");
var div15 = document.getElementById("amz");
var div16 = document.getElementById("sunday");
var div17 = document.getElementById("monday");
var div18 = document.getElementById("tuesday");
var div19 = document.getElementById("wednesday");

div2.style.display = "none";
div3.style.display = "none";
div4.style.display = "none";
div5.style.display = "none";
div6.style.display = "none";
div7.style.display = "none";
div8.style.display = "none";
div9.style.display = "none";
div10.style.display = "none";
div11.style.display = "none";
div12.style.display = "none";
div13.style.display = "none";
div14.style.display = "none";
div15.style.display = "none";
div16.style.display = "none";
div17.style.display = "none";
div18.style.display = "none";
div19.style.display = "none";

const editor = document.getElementById("editor");
const context = editor.getContext("2d");

const editor1 = document.getElementById("editor1");
const context1 = editor1.getContext("2d");


const editor2 = document.getElementById("editor2");
const context2 = editor2.getContext("2d");

const editor3 = document.getElementById("editor3");
const context3 = editor3.getContext("2d");

const editor4 = document.getElementById("editor4");
const context4 = editor4.getContext("2d");

cameraBtn.addEventListener("click", function () {

  let videoElem = document.querySelector("video");
  let audioElem = document.querySelector("audio");
  // 1.
  let recordBtn = document.querySelector("button");
  let pauseBtn = document.querySelector("pause");
  let isRecording = false;
  let isPaused = false;
  // user requirement sent
  let constraint = {
    audio: true, video: true
  }
  // represent future recording
  let recording = [];

  let mediarecordingObjectForCurrentStream;
  // promise
  let usermediaPromise = navigator
    .mediaDevices.getUserMedia(constraint);

  // stream coming from required
  usermediaPromise.
    then(function (stream) {
      // UI stream
      videoElem.srcObject = stream;

      // browser
      mediarecordingObjectForCurrentStream = new MediaRecorder(stream);
      // camera recording add -> recording array
      mediarecordingObjectForCurrentStream.ondataavailable = function (e) {
        recording.push(e.data);
      }

    }).catch(function (err) {
      console.log(err);
      alert("please allow camera");
    });



  if (div1.style.display == "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
  if (div3.style.display == "none") {
    div3.style.display = "block";
  } else {
    div3.style.display = "none";
  }

})

clickBtn.addEventListener("click", function () {


  if (div3.style.display == "none") {
    div3.style.display = "block";
  } else {
    div3.style.display = "none";
  }
  div2.style.display = "block";
  editor.width = videoElem1.videoWidth;
  editor.height = videoElem1.videoHeight;
  context.drawImage(videoElem1, 0, 0);
})

filesBtn.addEventListener("click", function () {
  const upload = document.createElement('input');
  upload.type = "file";
  upload.click();
  upload.onchange = function () {
    const img = new Image();
    img.onload = () => {
      const editor = document.getElementById("editor");
      const context = editor.getContext("2d");
      if (div1.style.display == "none") {
        div1.style.display = "block";
      } else {
        div1.style.display = "none";
      }
      div2.style.display = "block";
      editor.width = img.width;
      editor.height = img.height;
      context.drawImage(img, 0, 0);
    };
    img.onerror = () => {
      console.error("The provided file couldn't be loaded as an Image media");
    };
    img.src = URL.createObjectURL(this.files[0]);
  };
})

infoBtn.addEventListener("click", function () {
  if (div1.style.display == "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
  if (div4.style.display == "none") {
    div4.style.display = "block";
  } else {
    div4.style.display = "none";
  }
})

mensstylesBtn.addEventListener("click", function () {
  if (div2.style.display == "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
  if (div5.style.display == "none") {
    div5.style.display = "block";
  } else {
    div5.style.display = "none";
  }

  editor1.width = editor.width;
  editor1.height = editor.height;
  context1.drawImage(editor, 0, 0);
})

mensstylebackbutton.addEventListener("click", function () {
  if (div5.style.display == "none") {
    div5.style.display = "block";
  } else {
    div5.style.display = "none";
  }
  if (div2.style.display == "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
  editor.width = editor1.width;
  editor.height = editor1.height;
  context.drawImage(editor1, 0, 0);
})

informationbackbutton.addEventListener("click", function () {
  if (div4.style.display == "none") {
    div4.style.display = "block";
  } else {
    div4.style.display = "none";
  }
  if (div1.style.display == "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
})


accessoriesBtn.addEventListener("click", function () {
  if (div2.style.display == "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
  if (div6.style.display == "none") {
    div6.style.display = "block";
  } else {
    div6.style.display = "none";
  }
  div6.style.display = "block";
  editor2.width = editor.width;
  editor2.height = editor.height;
  context2.drawImage(editor, 0, 0);
})

accessoriesbackbutton.addEventListener("click", function () {
  if (div6.style.display == "none") {
    div6.style.display = "block";
  } else {
    div6.style.display = "none";
  }
  if (div2.style.display == "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
  editor.width = editor2.width;
  editor.height = editor2.height;
  context.drawImage(editor2, 0, 0);
})

effectBtn.addEventListener("click", function () {
  if (div2.style.display == "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
  if (div7.style.display == "none") {
    div7.style.display = "block";
  } else {
    div7.style.display = "none";
  }
  editor3.width = editor.width;
  editor3.height = editor.height;
  context3.drawImage(editor, 0, 0);
})

effectbackbutton.addEventListener("click", function () {
  if (div7.style.display == "none") {
    div7.style.display = "block";
  } else {
    div7.style.display = "none";
  }
  if (div2.style.display == "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
  editor.width = editor3.width;
  editor.height = editor3.height;
  context.drawImage(editor3, 0, 0);
})

editBtn.addEventListener("click", function () {
  if (div2.style.display == "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
  if (div8.style.display == "none") {
    div8.style.display = "block";
  } else {
    div8.style.display = "none";
  }

  editor4.width = editor.width;
  editor4.height = editor.height;
  context4.drawImage(editor, 0, 0);
})

editbackbutton.addEventListener("click", function () {
  if (div8.style.display == "none") {
    div8.style.display = "block";
  } else {
    div8.style.display = "none";
  }
  if (div2.style.display == "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
  editor.width = editor4.width;
  editor.height = editor4.height;
  context.drawImage(editor4, 0, 0);
})
flip_horizontalBtn.addEventListener("click", function () {
  let cols = editor4.width; // Width is number of columns
  let rows = editor4.height; // Height is number of rows
  let image = getRGBArray(rows, cols);

  for (let i = 0; i < Math.floor(rows / 2); i++) {
    for (let j = 0; j < cols; j++) {
      let tmp = image[i][j];
      image[i][j] = image[rows - 1 - i][j];
      image[rows - 1 - i][j] = tmp;
    }
  }
  setImageData(image, rows, cols);
})

flip_verticalBtn.addEventListener("click", function () {
  let cols = editor4.width; // Width is number of columns
  let rows = editor4.height; // Height is number of rows
  let image = getRGBArray(rows, cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < Math.floor(cols / 2); j++) {
      let tmp = image[i][j];
      image[i][j] = image[i][cols - 1 - j];
      image[i][cols - 1 - j] = tmp;
    }
  }
  setImageData(image, rows, cols);
})

rotate_leftBtn.addEventListener("click", function () {
  let cols = editor4.width; // Width is number of columns
  let rows = editor4.height; // Height is number of rows
  let image = getRGBArray(rows, cols);

  let limage = [];
  for (let i = cols - 1; i >= 0; i--) {
    let row = [];
    for (let j = 0; j < rows; j++) {
      row.push(image[j][i]);
    }
    limage.push(row);
  }
  setImageData(limage, cols, rows);
})

rotate_rightBtn.addEventListener("click", function () {
  let cols = editor4.width; // Width is number of columns
  let rows = editor4.height; // Height is number of rows
  let image = getRGBArray(rows, cols);

  let rimage = [];
  for (let i = 0; i < cols; i++) {
    let row = [];
    for (let j = rows - 1; j >= 0; j--) {
      row.push(image[j][i]);
    }
    rimage.push(row);
  }
  setImageData(rimage, cols, rows);
})

greyscale_Btn.addEventListener("click", function () {
  let cols = editor.width; // Width is number of columns
  let rows = editor.height; // Height is number of rows
  let image = getRGBArray(rows, cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let pixel = image[i][j];
      let shade = Math.floor(0.3 * pixel[0] + 0.59 * pixel[1] + 0.11 * pixel[2]);
      image[i][j][0] = image[i][j][1] = image[i][j][2] = shade;
    }
  }
  setImageData(image, rows, cols);
})

resizeBtn.addEventListener("click", function () {
  let cols = editor4.width; // Width is number of columns
  let rows = editor4.height; // Height is number of rows
  let image = getRGBArray(rows, cols);

  let inp = prompt('Current Width : ' + cols + '\n' + 'Current Height : ' + rows + '\n' + 'Give the new width and height in a space separated manner').split(' ');
  if (inp.length !== 2) {
    alert('Incorrect dimensions in input');
    return;
  }
  let ncols = parseInt(inp[0]);
  let nrows = parseInt(inp[1]);
  if (isNaN(ncols) || isNaN(nrows)) {
    alert('Input is not a proper number');
    return;
  }

  let hratio = rows / nrows;
  let wratio = cols / ncols;

  let nimage = [];
  for (let i = 0; i < nrows; i++) {
    let row = [];
    for (let j = 0; j < ncols; j++) {
      row.push(image[Math.floor(i * hratio)][Math.floor(j * wratio)]);
    }
    nimage.push(row);
  }
  setImageData(nimage, nrows, ncols);
})
function setImageData(data, rows, cols) {
  const Image = Array.from({ length: rows * cols * 4 });
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (let k = 0; k < 4; k++) {
        Image[(i * cols + j) * 4 + k] = data[i][j][k];
      }
    }
  }
  const idata = context4.createImageData(cols, rows);
  idata.data.set(Image);
  editor4.width = cols;
  editor4.height = rows;
  context4.putImageData(idata, 0, 0);
}

function getRGBArray(rows, cols) {
  let data = context4.getImageData(0, 0, cols, rows).data;
  const RGBImage = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let pixel = [];
      for (let k = 0; k < 4; k++) {
        pixel.push(data[(i * cols + j) * 4 + k]);
      }
      row.push(pixel);
    }
    RGBImage.push(row);
  }
  return RGBImage;
}

adjustBtn.addEventListener("click", function () {

  if (div9.style.display == "none") {
    div9.style.display = "block";
  } else {
    div9.style.display = "none";
  }
})

filterBtn.addEventListener("click", function () {

  if (div10.style.display == "none") {
    div10.style.display = "flex";
  } else {
    div10.style.display = "none";
  }
})

colorBtn.addEventListener("click", function () {

  if (div11.style.display == "none") {
    div11.style.display = "flex";
  } else {
    div11.style.display = "none";
  }
})

hairstyleBtn.addEventListener("click", function () {

  if (div12.style.display == "none") {
    div12.style.display = "flex";
  } else {
    div12.style.display = "none";
  }
})

let hairstyleselects = document.querySelectorAll(".hs");
for (let i = 0; i < hairstyleselects.length; i++) {
  hairstyleselects[i].addEventListener("click", function () {
    if (div12.style.display == "none") {
      div12.style.display = "flex";
    } else {
      div12.style.display = "none";
    }


    let img = hairstyleselects[i].querySelector("img");
    let src = img.getAttribute("src");

    let imagecontainer = document.createElement("div");
    imagecontainer.setAttribute("class", "roshan");

    let img1 = document.createElement("img");
    let firstTimeImageClick = true;
    img1.src = src;
    img1.classList.add("add_img1");
    img1.setAttribute('id', 'images');
    document.body.appendChild(img1);

    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");

    image1.setAttribute("src", "../PHOTO_EDITOR/New folder/close.png");
    image1.setAttribute("height", "30");
    image1.setAttribute("width", "30");
    image1.setAttribute("style", "display:none;");
    image1.setAttribute("class", "tool-imglast");
    image1.classList.add("close");
    image1.classList.add("zoom-outlast1");



    image3.setAttribute("src", "../PHOTO_EDITOR/New folder/resize.png");
    image3.setAttribute("height", "30");
    image3.setAttribute("width", "30");
    image3.setAttribute("style", "display:none;");
    image3.setAttribute("class", "tool-imglast");
    image3.classList.add("resize");
    image3.classList.add("zoom-outlast3");

    imagecontainer.appendChild(img1);
    imagecontainer.appendChild(image1);
    imagecontainer.appendChild(image3);
    document.querySelector("#drawing-tool").appendChild(imagecontainer);

    let imagesicon = document.querySelectorAll(".tool-imglast");
    for (let i = 0; i < imagesicon.length; i++) {
      imagesicon[i].style.display = "block";
    }

    let csselemimg = document.querySelectorAll(".add_img1");
    for (let i = 0; i < csselemimg.length; i++) {
      csselemimg[i].addEventListener("click", function () {
        if (csselemimg[i].style.display == "none") {
          csselemimg[i].style.display = "flex";
          for (let i = 0; i < imagesicon.length; i++) {
            imagesicon[i].style.display = "block";
          }
          firstTimeImageClick = false;
        } else {
          if (!firstTimeImageClick) {
            csselemimg[i].style.border = "none";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "none";
            }
          }
          else {
            csselemimg[i].style.border = "3px solid blue";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "block";
            }
          }
          firstTimeImageClick = !firstTimeImageClick
        }
      })
    }


    let drg = document.querySelectorAll(".roshan");

    let dragValue;
    let initialx, initialy;
    for (let i = 0; i < drg.length; i++) {
      drg[i].style.position = "absolute";
      drg[i].onmousedown = function () {
        dragValue = drg[i];
        initialx = e.clientX;
        initialy = e.clientY;
      }
      document.onmouseup = function (e) {
        dragValue = null;
      }

      document.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;

        let dx = x - initialx;
        let dy = y - initialy;

        if (dragValue) {
          let { top, left } = dragValue.getBoundingClientRect();
          let canvascord = editor1.getBoundingClientRect();
          if ((x - 30) > canvascord.left && (x + 30) < canvascord.right && (y - 40) > canvascord.top && (y + 40) < canvascord.bottom) {
            dragValue.style.left = dx + left + "px";
            dragValue.style.top = dy + top + "px";
            initialx = x;
            initialy = y;
          }
        }
      }
    }

    let resizeBtn = imagecontainer.querySelector(".resize");

    resizeBtn.addEventListener("click", function () {
      $(function () {
        $('.add_img1').resizable();
      });
    })

    let closeBtn = imagecontainer.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      for (let i = 0; i < csselemimg.length; i++) {
        csselemimg[i].style.display = "none";
        for (let i = 0; i < imagesicon.length; i++) {
          imagesicon[i].style.display = "none";
        }
      }
    })

  })

}




mustacheBtn.addEventListener("click", function () {

  if (div13.style.display == "none") {
    div13.style.display = "flex";
  } else {
    div13.style.display = "none";
  }
})

let mustacheselects = document.querySelectorAll(".mc");
for (let i = 0; i < mustacheselects.length; i++) {
  mustacheselects[i].addEventListener("click", function () {
    if (div13.style.display == "none") {
      div13.style.display = "flex";
    } else {
      div13.style.display = "none";
    }
    let img0 = mustacheselects[i].querySelector("img");
    let src = img0.getAttribute("src");

    let imagecontainer01 = document.createElement("div");
    imagecontainer01.setAttribute("class", "roshan1");

    let img10 = document.createElement("img");
    let firstTimeImageClick = true;
    img10.src = src;
    img10.classList.add("add_img1");
    img10.setAttribute('id', 'images');
    document.body.appendChild(img10);

    let image100 = document.createElement("img");
    let image300 = document.createElement("img");

    image100.setAttribute("src", "../PHOTO_EDITOR/New folder/close.png");
    image100.setAttribute("height", "30");
    image100.setAttribute("width", "30");
    image100.setAttribute("style", "display:none;");
    image100.setAttribute("class", "tool-imglast");
    image100.classList.add("close");
    image100.classList.add("zoom-outlast1");



    image300.setAttribute("src", "../PHOTO_EDITOR/New folder/resize.png");
    image300.setAttribute("height", "30");
    image300.setAttribute("width", "30");
    image300.setAttribute("style", "display:none;");
    image300.setAttribute("class", "tool-imglast");
    image300.classList.add("resize");
    image300.classList.add("zoom-outlast3");

    imagecontainer01.appendChild(img10);
    imagecontainer01.appendChild(image100);
    imagecontainer01.appendChild(image300);

    document.querySelector("#drawing-tool").appendChild(imagecontainer01);

    let imagesicon = document.querySelectorAll(".tool-imglast");
    for (let i = 0; i < imagesicon.length; i++) {
      imagesicon[i].style.display = "block";
    }

    let csselemimg1 = document.querySelectorAll(".add_img1");
    for (let i = 0; i < csselemimg1.length; i++) {
      csselemimg1[i].addEventListener("click", function () {
        if (csselemimg1[i].style.display == "none") {
          csselemimg1[i].style.display = "flex";
          for (let i = 0; i < imagesicon.length; i++) {
            imagesicon[i].style.display = "block";
          }
          firstTimeImageClick = false;
        } else {
          if (!firstTimeImageClick) {
            csselemimg1[i].style.border = "none";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "none";
            }
          }
          else {
            csselemimg1[i].style.border = "3px solid blue";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "block";
            }
          }
          firstTimeImageClick = !firstTimeImageClick
        }
      })
    }
    let drg = document.querySelectorAll(".roshan1");
    let dragValue;
    let initialx, initialy;
    for (let i = 0; i < drg.length; i++) {
      drg[i].style.position = "absolute";
      drg[i].onmousedown = function () {
        dragValue = drg[i];
        initialx = e.clientX;
        initialy = e.clientY;
      }
      document.onmouseup = function (e) {
        dragValue = null;
      }

      document.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;

        let dx = x - initialx;
        let dy = y - initialy;

        if (dragValue) {
          let { top, left } = dragValue.getBoundingClientRect();
          let canvascord = editor1.getBoundingClientRect();
          if ((x - 30) > canvascord.left && (x + 30) < canvascord.right && (y - 40) > canvascord.top && (y + 40) < canvascord.bottom) {
            dragValue.style.left = dx + left + "px";
            dragValue.style.top = dy + top + "px";
            initialx = x;
            initialy = y;
          }
        }
      }
    }

    let resizeBtn = imagecontainer01.querySelector(".resize");

    resizeBtn.addEventListener("click", function () {
      $(function () {
        $('.add_img1').resizable();
      });
    })

    let closeBtn = imagecontainer01.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      for (let i = 0; i < csselemimg1.length; i++) {
        csselemimg1[i].style.display = "none";
        for (let i = 0; i < imagesicon.length; i++) {
          imagesicon[i].style.display = "none";
        }
      }
    })
  })
}

beardBtn.addEventListener("click", function () {

  if (div14.style.display == "none") {
    div14.style.display = "flex";
  } else {
    div14.style.display = "none";
  }
})

let beardselects = document.querySelectorAll(".b1");
for (let i = 0; i < beardselects.length; i++) {
  beardselects[i].addEventListener("click", function () {
    if (div14.style.display == "none") {
      div14.style.display = "flex";
    } else {
      div14.style.display = "none";
    }

    let img1 = beardselects[i].querySelector("img");
    let src = img1.getAttribute("src");

    let imagecontainer02 = document.createElement("div");
    imagecontainer02.setAttribute("class", "roshan2");

    let img11 = document.createElement("img");
    let firstTimeImageClick = true;
    img11.src = src;
    img11.classList.add("add_img1");
    img11.setAttribute('id', 'images');
    document.body.appendChild(img11);

    let image101 = document.createElement("img");
    let image301 = document.createElement("img");

    image101.setAttribute("src", "../PHOTO_EDITOR/New folder/close.png");
    image101.setAttribute("height", "30");
    image101.setAttribute("width", "30");
    image101.setAttribute("style", "display:none;");
    image101.setAttribute("class", "tool-imglast");
    image101.classList.add("close");
    image101.classList.add("zoom-outlast1");



    image301.setAttribute("src", "../PHOTO_EDITOR/New folder/resize.png");
    image301.setAttribute("height", "30");
    image301.setAttribute("width", "30");
    image301.setAttribute("style", "display:none;");
    image301.setAttribute("class", "tool-imglast");
    image301.classList.add("resize");
    image301.classList.add("zoom-outlast3");

    imagecontainer02.appendChild(img11);
    imagecontainer02.appendChild(image101);
    imagecontainer02.appendChild(image301);

    document.querySelector("#drawing-tool").appendChild(imagecontainer02);

    let imagesicon = document.querySelectorAll(".tool-imglast");
    for (let i = 0; i < imagesicon.length; i++) {
      imagesicon[i].style.display = "block";
    }

    let csselemimg1 = document.querySelectorAll(".add_img1");
    for (let i = 0; i < csselemimg1.length; i++) {
      csselemimg1[i].addEventListener("click", function () {
        if (csselemimg1[i].style.display == "none") {
          csselemimg1[i].style.display = "flex";
          for (let i = 0; i < imagesicon.length; i++) {
            imagesicon[i].style.display = "block";
          }
          firstTimeImageClick = false;
        } else {
          if (!firstTimeImageClick) {
            csselemimg1[i].style.border = "none";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "none";
            }
          }
          else {
            csselemimg1[i].style.border = "3px solid blue";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "block";
            }
          }
          firstTimeImageClick = !firstTimeImageClick
        }
      })
    }
    let drg = document.querySelectorAll(".roshan2");
    let dragValue;
    let initialx, initialy;
    for (let i = 0; i < drg.length; i++) {
      drg[i].style.position = "absolute";
      drg[i].onmousedown = function (e) {
        dragValue = drg[i];
        initialx = e.clientX;
        initialy = e.clientY;
      }
      document.onmouseup = function (e) {
        dragValue = null;
      }

      document.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;

        let dx = x - initialx;
        let dy = y - initialy;

        if (dragValue) {
          let { top, left } = dragValue.getBoundingClientRect();
          let canvascord = editor1.getBoundingClientRect();
          if ((x - 30) > canvascord.left && (x + 30) < canvascord.right && (y - 40) > canvascord.top && (y + 40) < canvascord.bottom) {
            dragValue.style.left = dx + left + "px";
            dragValue.style.top = dy + top + "px";
            initialx = x;
            initialy = y;
          }
        }
      }
    }

    let resizeBtn = imagecontainer02.querySelector(".resize");

    resizeBtn.addEventListener("click", function () {
      $(function () {
        $('.add_img1').resizable();
      });
    })

    let closeBtn = imagecontainer02.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      for (let i = 0; i < csselemimg1.length; i++) {
        csselemimg1[i].style.display = "none";
        for (let i = 0; i < imagesicon.length; i++) {
          imagesicon[i].style.display = "none";
        }
      }
    })

  })
}

eyebrowBtn.addEventListener("click", function () {

  if (div15.style.display == "none") {
    div15.style.display = "flex";
  } else {
    div15.style.display = "none";
  }
})

let eyebrowselects = document.querySelectorAll(".e1");
for (let i = 0; i < eyebrowselects.length; i++) {
  eyebrowselects[i].addEventListener("click", function () {
    if (div15.style.display == "none") {
      div15.style.display = "flex";
    } else {
      div15.style.display = "none";
    }
    let img2 = eyebrowselects[i].querySelector("img");
    let src = img2.getAttribute("src");

    let imagecontainer03 = document.createElement("div");
    imagecontainer03.setAttribute("class", "roshan3");

    let img12 = document.createElement("img");
    let firstTimeImageClick = true;
    img12.src = src;
    img12.classList.add("add_img1");
    img12.setAttribute('id', 'images');
    document.body.appendChild(img12);

    let image102 = document.createElement("img");
    let image302 = document.createElement("img");

    image102.setAttribute("src", "../PHOTO_EDITOR/New folder/close.png");
    image102.setAttribute("height", "30");
    image102.setAttribute("width", "30");
    image102.setAttribute("style", "display:none;");
    image102.setAttribute("class", "tool-imglast");
    image102.classList.add("close");
    image102.classList.add("zoom-outlast1");



    image302.setAttribute("src", "../PHOTO_EDITOR/New folder/resize.png");
    image302.setAttribute("height", "30");
    image302.setAttribute("width", "30");
    image302.setAttribute("style", "display:none;");
    image302.setAttribute("class", "tool-imglast");
    image302.classList.add("resize");
    image302.classList.add("zoom-outlast3");

    imagecontainer03.appendChild(img12);
    imagecontainer03.appendChild(image102);
    imagecontainer03.appendChild(image302);

    document.querySelector("#drawing-tool").appendChild(imagecontainer03);

    let imagesicon = document.querySelectorAll(".tool-imglast");
    for (let i = 0; i < imagesicon.length; i++) {
      imagesicon[i].style.display = "block";
    }

    let csselemimg1 = document.querySelectorAll(".add_img1");
    for (let i = 0; i < csselemimg1.length; i++) {
      csselemimg1[i].addEventListener("click", function () {
        if (csselemimg1[i].style.display == "none") {
          csselemimg1[i].style.display = "flex";
          for (let i = 0; i < imagesicon.length; i++) {
            imagesicon[i].style.display = "block";
          }
          firstTimeImageClick = false;
        } else {
          if (!firstTimeImageClick) {
            csselemimg1[i].style.border = "none";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "none";
            }
          }
          else {
            csselemimg1[i].style.border = "3px solid blue";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "block";
            }
          }
          firstTimeImageClick = !firstTimeImageClick
        }
      })
    }
    let drg = document.querySelectorAll(".roshan3");
    let dragValue;
    let initialx, initialy;
    for (let i = 0; i < drg.length; i++) {
      drg[i].style.position = "absolute";
      drg[i].onmousedown = function (e) {
        dragValue = drg[i];
        initialx = e.clientX;
        initialy = e.clientY;
      }
      document.onmouseup = function (e) {
        dragValue = null;
      }

      document.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;

        let dx = x - initialx;
        let dy = y - initialy;

        if (dragValue) {
          let { top, left } = dragValue.getBoundingClientRect();
          let canvascord = editor1.getBoundingClientRect();
          if ((x - 30) > canvascord.left && (x + 30) < canvascord.right && (y - 40) > canvascord.top && (y + 40) < canvascord.bottom) {
            dragValue.style.left = dx + left + "px";
            dragValue.style.top = dy + top + "px";
            initialx = x;
            initialy = y;
          }
        }
      }
    }

    let resizeBtn = imagecontainer03.querySelector(".resize");

    resizeBtn.addEventListener("click", function () {
      $(function () {
        $('.add_img1').resizable();
      });
    })

    let closeBtn = imagecontainer03.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      for (let i = 0; i < csselemimg1.length; i++) {
        csselemimg1[i].style.display = "none";
        for (let i = 0; i < imagesicon.length; i++) {
          imagesicon[i].style.display = "none";
        }
      }
    })

  })
}

sunglassBtn.addEventListener("click", function () {

  if (div16.style.display == "none") {
    div16.style.display = "flex";
  } else {
    div16.style.display = "none";
  }
})

let sunglassesselects = document.querySelectorAll(".sun1");
for (let i = 0; i < sunglassesselects.length; i++) {
  sunglassesselects[i].addEventListener("click", function () {
    if (div16.style.display == "none") {
      div16.style.display = "flex";
    } else {
      div16.style.display = "none";
    }
    let img3 = sunglassesselects[i].querySelector("img");
    let src = img3.getAttribute("src");

    let imagecontainer04 = document.createElement("div");
    imagecontainer04.setAttribute("class", "roshan4");

    let img13 = document.createElement("img");
    let firstTimeImageClick = true;
    img13.src = src;
    img13.classList.add("add_img1");
    img13.setAttribute('id', 'images');
    document.body.appendChild(img13);

    let image103 = document.createElement("img");
    let image303 = document.createElement("img");

    image103.setAttribute("src", "../PHOTO_EDITOR/New folder/close.png");
    image103.setAttribute("height", "30");
    image103.setAttribute("width", "30");
    image103.setAttribute("style", "display:none;");
    image103.setAttribute("class", "tool-imglast");
    image103.classList.add("close");
    image103.classList.add("zoom-outlast1");



    image303.setAttribute("src", "../PHOTO_EDITOR/New folder/resize.png");
    image303.setAttribute("height", "30");
    image303.setAttribute("width", "30");
    image303.setAttribute("style", "display:none;");
    image303.setAttribute("class", "tool-imglast");
    image303.classList.add("resize");
    image303.classList.add("zoom-outlast3");

    imagecontainer04.appendChild(img13);
    imagecontainer04.appendChild(image103);
    imagecontainer04.appendChild(image303);

    document.querySelector("#drawing-tool2").appendChild(imagecontainer04);

    let imagesicon = document.querySelectorAll(".tool-imglast");
    for (let i = 0; i < imagesicon.length; i++) {
      imagesicon[i].style.display = "block";
    }

    let csselemimg1 = document.querySelectorAll(".add_img1");
    for (let i = 0; i < csselemimg1.length; i++) {
      csselemimg1[i].addEventListener("click", function () {
        if (csselemimg1[i].style.display == "none") {
          csselemimg1[i].style.display = "flex";
          for (let i = 0; i < imagesicon.length; i++) {
            imagesicon[i].style.display = "block";
          }
          firstTimeImageClick = false;
        } else {
          if (!firstTimeImageClick) {
            csselemimg1[i].style.border = "none";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "none";
            }
          }
          else {
            csselemimg1[i].style.border = "3px solid blue";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "block";
            }
          }
          firstTimeImageClick = !firstTimeImageClick
        }
      })
    }
    let drg = document.querySelectorAll(".roshan4");
    let dragValue;
    let initialx, initialy;
    for (let i = 0; i < drg.length; i++) {
      drg[i].style.position = "absolute";
      drg[i].onmousedown = function (e) {
        dragValue = drg[i];
        initialx = e.clientX;
        initialy = e.clientY;
      }
      document.onmouseup = function (e) {
        dragValue = null;
      }

      document.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;

        let dx = x - initialx;
        let dy = y - initialy;

        if (dragValue) {
          let { top, left } = dragValue.getBoundingClientRect();
          let canvascord = editor2.getBoundingClientRect();
          if ((x - 30) > canvascord.left && (x + 30) < canvascord.right && (y - 40) > canvascord.top && (y + 40) < canvascord.bottom) {
            dragValue.style.left = dx + left + "px";
            dragValue.style.top = dy + top + "px";
            initialx = x;
            initialy = y;
          }
        }
      }
    }

    let resizeBtn = imagecontainer04.querySelector(".resize");

    resizeBtn.addEventListener("click", function () {
      $(function () {
        $('.add_img1').resizable();
      });
    })

    let closeBtn = imagecontainer04.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      for (let i = 0; i < csselemimg1.length; i++) {
        csselemimg1[i].style.display = "none";
        for (let i = 0; i < imagesicon.length; i++) {
          imagesicon[i].style.display = "none";
        }
      }
    })
  })
}


capsBtn.addEventListener("click", function () {

  if (div17.style.display == "none") {
    div17.style.display = "flex";
  } else {
    div17.style.display = "none";
  }
   
})

let capselects = document.querySelectorAll(".cap1");
for (let i = 0; i < capselects.length; i++) {
  capselects[i].addEventListener("click", function () {
    if (div17.style.display == "none") {
      div17.style.display = "flex";
    } else {
      div17.style.display = "none";
    }
    let img4 = capselects[i].querySelector("img");
    let src = img4.getAttribute("src");

    let imagecontainer05 = document.createElement("div");
    imagecontainer05.setAttribute("class", "roshan5");

    let img14 = document.createElement("img");
    let firstTimeImageClick = true;
    img14.src = src;
    img14.classList.add("add_img1");
    img14.setAttribute('id', 'images');
    document.body.appendChild(img14);

    let image104 = document.createElement("img");
    let image304 = document.createElement("img");

    image104.setAttribute("src", "../PHOTO_EDITOR/New folder/close.png");
    image104.setAttribute("height", "30");
    image104.setAttribute("width", "30");
    image104.setAttribute("style", "display:none;");
    image104.setAttribute("class", "tool-imglast");
    image104.classList.add("close");
    image104.classList.add("zoom-outlast1");



    image304.setAttribute("src", "../PHOTO_EDITOR/New folder/resize.png");
    image304.setAttribute("height", "30");
    image304.setAttribute("width", "30");
    image304.setAttribute("style", "display:none;");
    image304.setAttribute("class", "tool-imglast");
    image304.classList.add("resize");
    image304.classList.add("zoom-outlast3");

    imagecontainer05.appendChild(img14);
    imagecontainer05.appendChild(image104);
    imagecontainer05.appendChild(image304);

    document.querySelector("#drawing-tool2").appendChild(imagecontainer05);

    let imagesicon = document.querySelectorAll(".tool-imglast");
    for (let i = 0; i < imagesicon.length; i++) {
      imagesicon[i].style.display = "block";
    }

    let csselemimg1 = document.querySelectorAll(".add_img1");
    for (let i = 0; i < csselemimg1.length; i++) {
      csselemimg1[i].addEventListener("click", function () {
        if (csselemimg1[i].style.display == "none") {
          csselemimg1[i].style.display = "flex";
          for (let i = 0; i < imagesicon.length; i++) {
            imagesicon[i].style.display = "block";
          }
          firstTimeImageClick = false;
        } else {
          if (!firstTimeImageClick) {
            csselemimg1[i].style.border = "none";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "none";
            }
          }
          else {
            csselemimg1[i].style.border = "3px solid blue";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "block";
            }
          }
          firstTimeImageClick = !firstTimeImageClick
        }
      })
    }
    let drg = document.querySelectorAll(".roshan5");
    let dragValue;
    let initialx, initialy;
    for (let i = 0; i < drg.length; i++) {
      drg[i].style.position = "absolute";
      drg[i].onmousedown = function (e) {
        dragValue = drg[i];
        initialx = e.clientX;
        initialy = e.clientY;
      }
      document.onmouseup = function (e) {
        dragValue = null;
      }

      document.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;

        let dx = x - initialx;
        let dy = y - initialy;

        if (dragValue) {
          let { top, left } = dragValue.getBoundingClientRect();
          let canvascord = editor2.getBoundingClientRect();
          if ((x - 30) > canvascord.left && (x + 30) < canvascord.right && (y - 40) > canvascord.top && (y + 40) < canvascord.bottom) {
            dragValue.style.left = dx + left + "px";
            dragValue.style.top = dy + top + "px";
            initialx = x;
            initialy = y;
          }
        }
      }
    }

    let resizeBtn = imagecontainer04.querySelector(".resize");

    resizeBtn.addEventListener("click", function () {
      $(function () {
        $('.add_img1').resizable();
      });
    })

    let closeBtn = imagecontainer04.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      for (let i = 0; i < csselemimg1.length; i++) {
        csselemimg1[i].style.display = "none";
        for (let i = 0; i < imagesicon.length; i++) {
          imagesicon[i].style.display = "none";
        }
      }
    })
  })
}



chainBtn.addEventListener("click", function () {

  if (div18.style.display == "none") {
    div18.style.display = "flex";
  } else {
    div18.style.display = "none";
  }
})

let chainselects = document.querySelectorAll(".cn1");
for (let i = 0; i < chainselects.length; i++) {
  chainselects[i].addEventListener("click", function () {
    if (div18.style.display == "none") {
      div18.style.display = "flex";
    } else {
      div18.style.display = "none";
    }
    let img5 = chainselects[i].querySelector("img");
    let src = img5.getAttribute("src");

    let imagecontainer06 = document.createElement("div");
    imagecontainer06.setAttribute("class", "roshan6");

    let img15 = document.createElement("img");
    let firstTimeImageClick = true;
    img15.src = src;
    img15.classList.add("add_img1");
    img15.setAttribute('id', 'images');
    document.body.appendChild(img15);

    let image105 = document.createElement("img");
    let image305 = document.createElement("img");

    image105.setAttribute("src", "../PHOTO_EDITOR/New folder/close.png");
    image105.setAttribute("height", "30");
    image105.setAttribute("width", "30");
    image105.setAttribute("style", "display:none;");
    image105.setAttribute("class", "tool-imglast");
    image105.classList.add("close");
    image105.classList.add("zoom-outlast1");



    image305.setAttribute("src", "../PHOTO_EDITOR/New folder/resize.png");
    image305.setAttribute("height", "30");
    image305.setAttribute("width", "30");
    image305.setAttribute("style", "display:none;");
    image305.setAttribute("class", "tool-imglast");
    image305.classList.add("resize");
    image305.classList.add("zoom-outlast3");

    imagecontainer06.appendChild(img15);
    imagecontainer06.appendChild(image105);
    imagecontainer06.appendChild(image305);

    document.querySelector("#drawing-tool2").appendChild(imagecontainer06);

    let imagesicon = document.querySelectorAll(".tool-imglast");
    for (let i = 0; i < imagesicon.length; i++) {
      imagesicon[i].style.display = "block";
    }

    let csselemimg1 = document.querySelectorAll(".add_img1");
    for (let i = 0; i < csselemimg1.length; i++) {
      csselemimg1[i].addEventListener("click", function () {
        if (csselemimg1[i].style.display == "none") {
          csselemimg1[i].style.display = "flex";
          for (let i = 0; i < imagesicon.length; i++) {
            imagesicon[i].style.display = "block";
          }
          firstTimeImageClick = false;
        } else {
          if (!firstTimeImageClick) {
            csselemimg1[i].style.border = "none";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "none";
            }
          }
          else {
            csselemimg1[i].style.border = "3px solid blue";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "block";
            }
          }
          firstTimeImageClick = !firstTimeImageClick
        }
      })
    }
    let drg = document.querySelectorAll(".roshan6");
    let dragValue;
    let initialx, initialy;
    for (let i = 0; i < drg.length; i++) {
      drg[i].style.position = "absolute";
      drg[i].onmousedown = function (e) {
        dragValue = drg[i];
        initialx = e.clientX;
        initialy = e.clientY;
      }
      document.onmouseup = function (e) {
        dragValue = null;
      }

      document.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;

        let dx = x - initialx;
        let dy = y - initialy;

        if (dragValue) {
          let { top, left } = dragValue.getBoundingClientRect();
          let canvascord = editor2.getBoundingClientRect();
          if ((x - 30) > canvascord.left && (x + 30) < canvascord.right && (y - 40) > canvascord.top && (y + 40) < canvascord.bottom) {
            dragValue.style.left = dx + left + "px";
            dragValue.style.top = dy + top + "px";
            initialx = x;
            initialy = y;
          }
        }
      }
    }

    let resizeBtn = imagecontainer06.querySelector(".resize");

    resizeBtn.addEventListener("click", function () {
      $(function () {
        $('.add_img1').resizable();
      });
    })

    let closeBtn = imagecontainer06.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      for (let i = 0; i < csselemimg1.length; i++) {
        csselemimg1[i].style.display = "none";
        for (let i = 0; i < imagesicon.length; i++) {
          imagesicon[i].style.display = "none";
        }
      }
    })
  })
}

tieBtn.addEventListener("click", function () {

  if (div19.style.display == "none") {
    div19.style.display = "flex";
  } else {
    div19.style.display = "none";
  }
})

let tieselects = document.querySelectorAll(".te1");
for (let i = 0; i < tieselects.length; i++) {
  tieselects[i].addEventListener("click", function () {
    if (div19.style.display == "none") {
      div19.style.display = "flex";
    } else {
      div19.style.display = "none";
    }
    let img6 = chainselects[i].querySelector("img");
    let src = img6.getAttribute("src");

    let imagecontainer07 = document.createElement("div");
    imagecontainer07.setAttribute("class", "roshan6");

    let img16 = document.createElement("img");
    let firstTimeImageClick = true;
    img16.src = src;
    img16.classList.add("add_img1");
    img16.setAttribute('id', 'images');
    document.body.appendChild(img16);

    let image106 = document.createElement("img");
    let image306 = document.createElement("img");

    image106.setAttribute("src", "../PHOTO_EDITOR/New folder/close.png");
    image106.setAttribute("height", "30");
    image106.setAttribute("width", "30");
    image106.setAttribute("style", "display:none;");
    image106.setAttribute("class", "tool-imglast");
    image106.classList.add("close");
    image106.classList.add("zoom-outlast1");



    image306.setAttribute("src", "../PHOTO_EDITOR/New folder/resize.png");
    image306.setAttribute("height", "30");
    image306.setAttribute("width", "30");
    image306.setAttribute("style", "display:none;");
    image306.setAttribute("class", "tool-imglast");
    image306.classList.add("resize");
    image306.classList.add("zoom-outlast3");

    imagecontainer07.appendChild(img16);
    imagecontainer07.appendChild(image106);
    imagecontainer07.appendChild(image306);

    document.querySelector("#drawing-tool2").appendChild(imagecontainer07);

    let imagesicon = document.querySelectorAll(".tool-imglast");
    for (let i = 0; i < imagesicon.length; i++) {
      imagesicon[i].style.display = "block";
    }

    let csselemimg1 = document.querySelectorAll(".add_img1");
    for (let i = 0; i < csselemimg1.length; i++) {
      csselemimg1[i].addEventListener("click", function () {
        if (csselemimg1[i].style.display == "none") {
          csselemimg1[i].style.display = "flex";
          for (let i = 0; i < imagesicon.length; i++) {
            imagesicon[i].style.display = "block";
          }
          firstTimeImageClick = false;
        } else {
          if (!firstTimeImageClick) {
            csselemimg1[i].style.border = "none";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "none";
            }
          }
          else {
            csselemimg1[i].style.border = "3px solid blue";
            for (let i = 0; i < imagesicon.length; i++) {
              imagesicon[i].style.display = "block";
            }
          }
          firstTimeImageClick = !firstTimeImageClick
        }
      })
    }
    let drg = document.querySelectorAll(".roshan7");
    let dragValue;
    let initialx, initialy;
    for (let i = 0; i < drg.length; i++) {
      drg[i].style.position = "absolute";
      drg[i].onmousedown = function (e) {
        dragValue = drg[i];
        initialx = e.clientX;
        initialy = e.clientY;
      }
      document.onmouseup = function (e) {
        dragValue = null;
      }

      document.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;

        let dx = x - initialx;
        let dy = y - initialy;

        if (dragValue) {
          let { top, left } = dragValue.getBoundingClientRect();
          let canvascord = editor2.getBoundingClientRect();
          if ((x - 30) > canvascord.left && (x + 30) < canvascord.right && (y - 40) > canvascord.top && (y + 40) < canvascord.bottom) {
            dragValue.style.left = dx + left + "px";
            dragValue.style.top = dy + top + "px";
            initialx = x;
            initialy = y;
          }
        }
      }
    }

    let resizeBtn = imagecontainer07.querySelector(".resize");

    resizeBtn.addEventListener("click", function () {
      $(function () {
        $('.add_img1').resizable();
      });
    })

    let closeBtn = imagecontainer07.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      for (let i = 0; i < csselemimg1.length; i++) {
        csselemimg1[i].style.display = "none";
        for (let i = 0; i < imagesicon.length; i++) {
          imagesicon[i].style.display = "none";
        }
      }
    })
  })
}


var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");


var output = document.getElementById("value");


slider1.addEventListener("mousemove", function () {
  var x = slider1.value;
  var color = 'linear-gradient(90deg,rgb(255, 255, 255)' + x + '%,rgb(214,214,214)' + x + '%)';
  slider1.style.background = color;
  editor3.style.filter = "contrast(" + x + "%)";
})


slider2.addEventListener("mousemove", function () {
  var x = slider2.value;
  var color = 'linear-gradient(90deg,rgb(255, 255, 255)' + x + '%,rgb(214,214,214)' + x + '%)';
  slider2.style.background = color;
  editor3.style.filter = "brightness (" + x + "%)";
})

slider3.addEventListener("mousemove", function () {
  var x = slider3.value;
  var color = 'linear-gradient(90deg,rgb(255, 255, 255)' + x + '%,rgb(214,214,214)' + x + '%)';
  slider3.style.background = color;
  editor3.style.filter = "saturate(" + x + "%)";
})


let allFilters = document.querySelectorAll(".filter");

for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", function (e) {
    filter = e.currentTarget.style.backgroundColor;
    removeFilter();
    addFilterToScreen(filter);
    save(filter);
  })
}


function removeFilter() {
  let OnScreenfilter = document.querySelector(".on-screen-filter");
  if (OnScreenfilter) OnScreenfilter.remove();
}

function addFilterToScreen(filterColor) {
  let filter = document.createElement("div");
  filter.classList.add("on-screen-filter");
  filter.style.height = "300px";
  filter.style.width = "800px";
  filter.style.position = "fixed";
  filter.style.top = "50px";
  filter.style.left = "280px";
  filter.style.background = `${filterColor}`;
  document.querySelector("body").appendChild(filter);
}

let allColors = document.querySelectorAll(".color");

for (let i = 0; i < allColors.length; i++) {
  allColors[i].addEventListener("click", function (e) {
    color = e.currentTarget.style.backgroundColor;
    removeColor();
    addFilterToScreen(color);
    save(color);
  })
}


function removeColor() {
  let OnScreenColor = document.querySelector(".on-screen-color");
  if (OnScreenColor) OnScreenColor.remove();
}

function addFilterToScreen(filterColor) {
  let color = document.createElement("div");
  color.classList.add("on-screen-color");
  color.style.height = "300px";
  color.style.width = "800px";
  color.style.position = "fixed";
  color.style.top = "50px";
  color.style.left = "280px";
  color.style.background = `${filterColor}`;
  document.querySelector("body").appendChild(color);
}

let scaleLevel = 1;
function save(filterColor) {
  let canvas = document.createElement("canvas");
  canvas.height = editor3.height;
  canvas.width = editor3.width;
  let tool = canvas.getContext("2d");
  // scaling
  // top left corner
  tool.scale(scaleLevel, scaleLevel);
  const x = (tool.canvas.width / scaleLevel - editor3.width) / 2;
  const y = (tool.canvas.height / scaleLevel - editor3.height) / 2;
  // console.log(x, y);
  tool.drawImage(editor3, x, y);
  if (filterColor) {
    tool.fillStyle = filterColor;
    tool.fillRect(0, 0, canvas.width, canvas.height);
  }
}

//<img src="../PHOTO_EDITOR/png images/3.BEARD_IMAGES/beard_2.png" 
//class="add_img ui-resizable"
// style="margin: 0px; resize: none; position: static; zoom: 1; display: block;height: 169.594px; width: 239.594px;"></img>33