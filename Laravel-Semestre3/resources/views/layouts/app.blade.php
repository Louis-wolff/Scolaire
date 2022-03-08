@include('shared.message')

<html>
    <head>
        <title>Dragon - @yield('title')</title>
    </head>
    <body>
        @section('moi')
            <p>@yield('message')</p>
        @show
    </body>
</html>