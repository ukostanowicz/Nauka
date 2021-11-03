<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Resposive web design</title>
  <style>

    .box {
      margin: 10px;
      width: 100px;
      height: 100px;
      background-color: #FD6F96;
      flex-shrink: 0;
    }

    .container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    @media only screen and (max-width: 1000px) {
      body {
        background-color: #e6cbad;
      }

      .container {
        justify-content: flex-start;
      }
    }

    @media only screen and (max-width: 600px) {
      body {
        background-color: lightblue;
      }

      .container {
        margin: 0;
        justify-content: flex-end;
        flex-wrap: wrap;
      }
    }

    @media only screen and (max-width: 400px) {
      body {
        background-color: #c7ade6;
      }

      .container {
        justify-content: center;
        flex-wrap: wrap;
      }

      .box {
        background-color: white;
      }
    }

    @media only screen and (max-width: 200px) {
      body {
        background-color: #c0e6ad;
      }

      .container {
        justify-content: center;
        flex-wrap: wrap;
      }

      .box {
        background-color: #FD6F96;
        width: 50px;
        height: 50px;
      }
    }

  </style>
</head>
<body>
  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</body>
</html>