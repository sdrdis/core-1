<li><a onclick="$(this).nosTabs('open', {url: 'admin/noviusos_user/account', app: true, iconSize: 32, labelDisplay: false, iconUrl: 'static/apps/noviusos_user/img/32/myaccount.png', label: <?= htmlentities(\Format::forge(__('My account'))->to_json()) ?>});"><?= __('My account') ?></a></li>
<li><a onclick="document.location = 'admin/noviusos_user/account/disconnect';"><?= __('Log out') ?></a></li>