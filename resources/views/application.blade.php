<!DOCTYPE html>
<html lang="en" dir='ltr'>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>Kooko's Pizza</title>

  <!-- Splash Screen/Loader Styles -->
  <link rel="stylesheet" type="text/css" href="{{ asset(mix('css/loader.css')) }}" />

  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/core.css')) }}">
  

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('logo.svg') }}">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
  rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
</head>

<body>
  <noscript>
    <strong>We're sorry but Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template doesn't work properly without
      JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="loading-bg">
    <div class="loading-logo">
      <img src="{{ asset('logo.png') }}" alt="Logo" />
    </div>
    <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>
  <div id="app">
  </div>

  <script src="{{ asset(mix('js/app.js')) }}"></script>

</body>

</html>
