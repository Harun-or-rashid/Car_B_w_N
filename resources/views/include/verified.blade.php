<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title> Success | {{ config('app.name', 'SAM') }}</title>
    <!-- partial CSS specific page-->
    <!-- FAVICONS ICON -->
    <link href="{{ URL::to('/') }}/favicon.png" type="image/x-icon" rel="icon"/>
    <link href="{{ URL::to('/') }}/favicon.png" type="image/x-icon" rel="shortcut icon"/>

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style>
        #bg-color {
            background: #ececf3;
            margin: 0px;
            padding: 0px;
            text-align: center;
        }

        .section-content {
            width: 100%;
            height: 100%;
        }

        .page-notfound {
            position: relative;
            height: 100vh;
        }

        .content {
            margin: 0;
            position: absolute;
            top: 35%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        .content h5 {
            font-size: 30px;
            font-weight: 700;
            color: #00a65a;
            text-transform: uppercase;
        }

        .content p {
            font-size: 16px;
        }

    </style>
</head>

<body id="bg-color">
<!-- contact area -->
<div class="container-fluid">
    <!-- 500 Page -->
    <div class="section-content">
        <div class="row">
            <div class="col-md-12">
                <div class="page-notfound text-center">
                    <div class="content">
                        <h5>SUCCESS</h5>
                        <p>Your email has been verified. Now You can login into the application.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 500 Page END -->
</div>
<!-- contact area  END -->

</div>
</body>

</html>
