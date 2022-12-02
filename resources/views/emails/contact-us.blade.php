@component('mail::message')
<h4>Message From: <strong> {{ $data->name }} </strong></h4>
<p>{{ $data->message }}</p>

<a href="{{ route('admin.contact-us.show',$data->id) }}"
    style="text-decoration: none;background: #5dccd1;color: #fff;padding: 5px 10px; border-radius:2px;cursor: pointer;">Detail</a>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
