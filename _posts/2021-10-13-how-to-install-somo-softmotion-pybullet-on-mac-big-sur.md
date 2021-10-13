---
layout: post
title: How to install SoMo - SoftMotion PyBullet on Mac Big Sur
date: 2021-10-13T03:53:00.580Z
thumbnail: https://somo.readthedocs.io/en/latest/_static/logo.png
categories: How-to
---
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>SoMo - Soft Motion PyBullet</title>
    <style>
    /* cspell:disable-file */
    /* webkit printing magic: print all background colors */
    html {
        -webkit-print-color-adjust: exact;
    }

    * {
        box-sizing: border-box;
        -webkit-print-color-adjust: exact;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    @media only screen {
        body {
            margin: 2em auto;
            max-width: 900px;
            color: rgb(55, 53, 47);
        }
    }

    body {
        line-height: 1.5;
        white-space: pre-wrap;
    }

    a, a.visited {
        color: inherit;
        text-decoration: underline;
    }

    .pdf-relative-link-path {
        font-size: 80%;
        color: #444;
    }

    h1, h2, h3 {
        letter-spacing: -0.01em;
        line-height: 1.2;
        font-weight: 600;
        margin-bottom: 0;
    }

    .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 0.75em;
    }

    h1 {
        font-size: 1.875rem;
        margin-top: 1.875rem;
    }

    h2 {
        font-size: 1.5rem;
        margin-top: 1.5rem;
    }

    h3 {
        font-size: 1.25rem;
        margin-top: 1.25rem;
    }

    .source {
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 1.5em;
        word-break: break-all;
    }

    .callout {
        border-radius: 3px;
        padding: 1rem;
    }

    figure {
        margin: 1.25em 0;
        page-break-inside: avoid;
    }

    figcaption {
        opacity: 0.5;
        font-size: 85%;
        margin-top: 0.5em;
    }

    mark {
        background-color: transparent;
    }

    .indented {
        padding-left: 1.5em;
    }

    hr {
        background: transparent;
        display: block;
        width: 100%;
        height: 1px;
        visibility: visible;
        border: none;
        border-bottom: 1px solid rgba(55, 53, 47, 0.09);
    }

    img {
        max-width: 100%;
    }

    @media only print {
        img {
            max-height: 100vh;
            object-fit: contain;
        }
    }

    @page {
        margin: 1in;
    }

    .collection-content {
        font-size: 0.875rem;
    }

    .column-list {
        display: flex;
        justify-content: space-between;
    }

    .column {
        padding: 0 1em;
    }

    .column:first-child {
        padding-left: 0;
    }

    .column:last-child {
        padding-right: 0;
    }

    .table_of_contents-item {
        display: block;
        font-size: 0.875rem;
        line-height: 1.3;
        padding: 0.125rem;
    }

    .table_of_contents-indent-1 {
        margin-left: 1.5rem;
    }

    .table_of_contents-indent-2 {
        margin-left: 3rem;
    }

    .table_of_contents-indent-3 {
        margin-left: 4.5rem;
    }

    .table_of_contents-link {
        text-decoration: none;
        opacity: 0.7;
        border-bottom: 1px solid rgba(55, 53, 47, 0.18);
    }

    table, th, td {
        border: 1px solid rgba(55, 53, 47, 0.09);
        border-collapse: collapse;
    }

    table {
        border-left: none;
        border-right: none;
    }

    th, td {
        font-weight: normal;
        padding: 0.25em 0.5em;
        line-height: 1.5;
        min-height: 1.5em;
        text-align: left;
    }

    th {
        color: rgba(55, 53, 47, 0.6);
    }

    ol, ul {
        margin: 0;
        margin-block-start: 0.6em;
        margin-block-end: 0.6em;
    }

    li > ol:first-child, li > ul:first-child {
        margin-block-start: 0.6em;
    }

    ul > li {
        list-style: disc;
    }

    ul.to-do-list {
        text-indent: -1.7em;
    }

    ul.to-do-list > li {
        list-style: none;
    }

    .to-do-children-checked {
        text-decoration: line-through;
        opacity: 0.375;
    }

    ul.toggle > li {
        list-style: none;
    }

    ul {
        padding-inline-start: 1.7em;
    }

    ul > li {
        padding-left: 0.1em;
    }

    ol {
        padding-inline-start: 1.6em;
    }

    ol > li {
        padding-left: 0.2em;
    }

    .mono ol {
        padding-inline-start: 2em;
    }

    .mono ol > li {
        text-indent: -0.4em;
    }

    .toggle {
        padding-inline-start: 0em;
        list-style-type: none;
    }/* Indent toggle children */
    .toggle > li > details {
        padding-left: 1.7em;
    }

    .toggle > li > details > summary {
        margin-left: -1.1em;
    }

    .selected-value {
        display: inline-block;
        padding: 0 0.5em;
        background: rgba(206, 205, 202, 0.5);
        border-radius: 3px;
        margin-right: 0.5em;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        white-space: nowrap;
    }

    .collection-title {
        display: inline-block;
        margin-right: 1em;
    }

    time {
        opacity: 0.5;
    }

    .icon {
        display: inline-block;
        max-width: 1.2em;
        max-height: 1.2em;
        text-decoration: none;
        vertical-align: text-bottom;
        margin-right: 0.5em;
    }

    img.icon {
        border-radius: 3px;
    }

    .user-icon {
        width: 1.5em;
        height: 1.5em;
        border-radius: 100%;
        margin-right: 0.5rem;
    }

    .user-icon-inner {
        font-size: 0.8em;
    }

    .text-icon {
        border: 1px solid #000;
        text-align: center;
    }

    .page-cover-image {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 30vh;
    }

    .page-header-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .page-header-icon-with-cover {
        margin-top: -0.72em;
        margin-left: 0.07em;
    }

    .page-header-icon img {
        border-radius: 3px;
    }

    .link-to-page {
        margin: 1em 0;
        padding: 0;
        border: none;
        font-weight: 500;
    }

    p > .user {
        opacity: 0.5;
    }

    td > .user, td > time {
        white-space: nowrap;
    }

    input[type="checkbox"] {
        transform: scale(1.5);
        margin-right: 0.6em;
        vertical-align: middle;
    }

    p {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    .image {
        border: none;
        margin: 1.5em 0;
        padding: 0;
        border-radius: 0;
        text-align: center;
    }

    .code, code {
        background: rgba(135, 131, 120, 0.15);
        border-radius: 3px;
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-size: 85%;
        tab-size: 2;
    }

    code {
        color: #eb5757;
    }

    .code {
        padding: 1.5em 1em;
    }

    .code-wrap {
        white-space: pre-wrap;
        word-break: break-all;
    }

    .code > code {
        background: none;
        padding: 0;
        font-size: 100%;
        color: inherit;
    }

    blockquote {
        font-size: 1.25em;
        margin: 1em 0;
        padding-left: 1em;
        border-left: 3px solid rgb(55, 53, 47);
    }

    .bookmark {
        text-decoration: none;
        max-height: 8em;
        padding: 0;
        display: flex;
        width: 100%;
        align-items: stretch;
    }

    .bookmark-title {
        font-size: 0.85em;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 1.75em;
        white-space: nowrap;
    }

    .bookmark-text {
        display: flex;
        flex-direction: column;
    }

    .bookmark-info {
        flex: 4 1 180px;
        padding: 12px 14px 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .bookmark-image {
        width: 33%;
        flex: 1 1 180px;
        display: block;
        position: relative;
        object-fit: cover;
        border-radius: 1px;
    }

    .bookmark-description {
        color: rgba(55, 53, 47, 0.6);
        font-size: 0.75em;
        overflow: hidden;
        max-height: 4.5em;
        word-break: break-word;
    }

    .bookmark-href {
        font-size: 0.75em;
        margin-top: 0.25em;
    }

    .sans {
        font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .code {
        font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
    }

    .serif {
        font-family: Lyon-Text, Georgia, ui-serif, serif;
    }

    .mono {
        font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
    }

    .pdf .sans {
        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP';
    }

    .pdf:lang(zh-CN) .sans {
        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC';
    }

    .pdf:lang(zh-TW) .sans {
        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC';
    }

    .pdf:lang(ko-KR) .sans {
        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR';
    }

    .pdf .code {
        font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP';
    }

    .pdf:lang(zh-CN) .code {
        font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC';
    }

    .pdf:lang(zh-TW) .code {
        font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC';
    }

    .pdf:lang(ko-KR) .code {
        font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR';
    }

    .pdf .serif {
        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP';
    }

    .pdf:lang(zh-CN) .serif {
        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC';
    }

    .pdf:lang(zh-TW) .serif {
        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC';
    }

    .pdf:lang(ko-KR) .serif {
        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR';
    }

    .pdf .mono {
        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP';
    }

    .pdf:lang(zh-CN) .mono {
        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC';
    }

    .pdf:lang(zh-TW) .mono {
        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC';
    }

    .pdf:lang(ko-KR) .mono {
        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR';
    }

    .highlight-default {
        color: rgba(55, 53, 47, 1);
    }

    .highlight-gray {
        color: rgba(96, 96, 98, 0.93);
        fill: rgba(96, 96, 98, 0.93);
    }

    .highlight-brown {
        color: rgba(174, 102, 29, 1);
        fill: rgba(174, 102, 29, 1);
    }

    .highlight-orange {
        color: rgba(210, 82, 22, 1);
        fill: rgba(210, 82, 22, 1);
    }

    .highlight-yellow {
        color: rgba(203, 145, 47, 1);
        fill: rgba(203, 145, 47, 1);
    }

    .highlight-teal {
        color: rgba(62, 143, 53, 1);
        fill: rgba(62, 143, 53, 1);
    }

    .highlight-blue {
        color: rgba(33, 131, 190, 1);
        fill: rgba(33, 131, 190, 1);
    }

    .highlight-purple {
        color: rgba(151, 93, 190, 1);
        fill: rgba(151, 93, 190, 1);
    }

    .highlight-pink {
        color: rgba(203, 62, 132, 1);
        fill: rgba(203, 62, 132, 1);
    }

    .highlight-red {
        color: rgba(208, 60, 60, 1);
        fill: rgba(208, 60, 60, 1);
    }

    .highlight-gray_background {
        background: rgba(234, 234, 235, 0.93);
    }

    .highlight-brown_background {
        background: rgba(213, 130, 38, 0.13);
    }

    .highlight-orange_background {
        background: rgba(252, 103, 27, 0.13);
    }

    .highlight-yellow_background {
        background: rgba(253, 183, 63, 0.13);
    }

    .highlight-teal_background {
        background: rgba(76, 169, 66, 0.13);
    }

    .highlight-blue_background {
        background: rgba(45, 159, 226, 0.13);
    }

    .highlight-purple_background {
        background: rgba(187, 123, 230, 0.13);
    }

    .highlight-pink_background {
        background: rgba(255, 85, 163, 0.13);
    }

    .highlight-red_background {
        background: rgba(255, 82, 71, 0.13);
    }

    .block-color-default {
        color: inherit;
        fill: inherit;
    }

    .block-color-gray {
        color: rgba(96, 96, 98, 0.93);
        fill: rgba(96, 96, 98, 0.93);
    }

    .block-color-brown {
        color: rgba(174, 102, 29, 1);
        fill: rgba(174, 102, 29, 1);
    }

    .block-color-orange {
        color: rgba(210, 82, 22, 1);
        fill: rgba(210, 82, 22, 1);
    }

    .block-color-yellow {
        color: rgba(203, 145, 47, 1);
        fill: rgba(203, 145, 47, 1);
    }

    .block-color-teal {
        color: rgba(62, 143, 53, 1);
        fill: rgba(62, 143, 53, 1);
    }

    .block-color-blue {
        color: rgba(33, 131, 190, 1);
        fill: rgba(33, 131, 190, 1);
    }

    .block-color-purple {
        color: rgba(151, 93, 190, 1);
        fill: rgba(151, 93, 190, 1);
    }

    .block-color-pink {
        color: rgba(203, 62, 132, 1);
        fill: rgba(203, 62, 132, 1);
    }

    .block-color-red {
        color: rgba(208, 60, 60, 1);
        fill: rgba(208, 60, 60, 1);
    }

    .block-color-gray_background {
        background: rgba(234, 234, 235, 0.93);
    }

    .block-color-brown_background {
        background: rgba(213, 130, 38, 0.13);
    }

    .block-color-orange_background {
        background: rgba(252, 103, 27, 0.13);
    }

    .block-color-yellow_background {
        background: rgba(253, 183, 63, 0.13);
    }

    .block-color-teal_background {
        background: rgba(76, 169, 66, 0.13);
    }

    .block-color-blue_background {
        background: rgba(45, 159, 226, 0.13);
    }

    .block-color-purple_background {
        background: rgba(187, 123, 230, 0.13);
    }

    .block-color-pink_background {
        background: rgba(255, 85, 163, 0.13);
    }

    .block-color-red_background {
        background: rgba(255, 82, 71, 0.13);
    }

    .select-value-color-gray {
        background-color: rgba(234, 234, 235, 0.93);
    }

    .select-value-color-brown {
        background-color: rgba(213, 130, 38, 0.13);
    }

    .select-value-color-orange {
        background-color: rgba(252, 103, 27, 0.13);
    }

    .select-value-color-yellow {
        background-color: rgba(253, 183, 63, 0.13);
    }

    .select-value-color-green {
        background-color: rgba(76, 169, 66, 0.13);
    }

    .select-value-color-blue {
        background-color: rgba(45, 159, 226, 0.13);
    }

    .select-value-color-purple {
        background-color: rgba(187, 123, 230, 0.13);
    }

    .select-value-color-pink {
        background-color: rgba(255, 85, 163, 0.13);
    }

    .select-value-color-red {
        background-color: rgba(255, 82, 71, 0.13);
    }

    .checkbox {
        display: inline-flex;
        vertical-align: text-bottom;
        width: 16;
        height: 16;
        background-size: 16px;
        margin-left: 2px;
        margin-right: 5px;
    }

    .checkbox-on {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
    }

    .checkbox-off {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
    }
    </style>
</head>
<body>
    <article id="917ac2ad-d223-4631-aa98-de2fda07df2f" class="page sans">
        <header>
            <h1 class="page-title">SoMo - Soft Motion PyBullet</h1>
        </header>
        <div class="page-body">
            <h2 id="f9d77d06-2793-465d-965b-33660179c14a" class="">Installation on Mac Big Sur</h2>
            <p id="23b4331d-fae4-4162-a99d-a2ea0279431b" class="">Install HomeBrew for Mac</p>
            <pre id="a19562e8-cd52-48fa-b95a-6a19a790b450" class="code">
                <code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</code>
            </pre>
            <p id="f9118dd2-851a-4026-a07a-72bffa05f539" class=""></p>
            <p id="7c4672e9-7f98-4165-95a7-74716f3f9ccf" class="">Install newest Python (3.9)</p>
            <pre id="a80127e6-0d99-4678-b704-45da4f1c77f4" class="code">
                <code>sudo brew install python</code>
            </pre>
            <p id="fe060204-30df-4499-93c7-5a205c0f0fdd" class=""></p>
            <p id="d52ffc73-fb44-4b3f-94e4-86c377487922" class="">Install packages which might be not installed yet</p>
            <pre id="de91fd3d-d48e-4512-a479-acab6fc163bb" class="code">
                <code>sudo brew install pkg-config
                sudo brew install freetype</code>
            </pre>
            <p id="7632703b-0b57-40ee-8593-a14eeb98de3c" class=""></p>
            <p id="0eb94c7f-dc53-4b8f-87c8-5e054c70eb16" class="">Clone repo</p>
            <pre id="5fae9452-d296-45c4-9807-dae63e7cf086" class="code">
                <code>git clone https://github.com/GrauleM/somo.git</code>
            </pre>
            <p id="4e01e5af-67d9-452b-a879-ead2289132a4" class=""></p>
            <p id="5cd25e9f-65ab-4ef0-9640-91d872c6b5af" class="">
                Create virtual environment, might need to change 
                <code>3.9</code>
                 to a newer version
            </p>
            <pre id="e532ba1f-84f9-4192-97d4-2060fffac478" class="code">
                <code>cd somo
                python3.9 -m venv venv</code>
            </pre>
            <p id="d268ff57-ea5e-4480-a032-4395101afdb3" class=""></p>
            <p id="4276af86-d370-45a0-8e7a-73c7a38a9f3b" class="">Activate venv</p>
            <pre id="bcba73a8-7768-4fb9-a07a-b76dc783d1fc" class="code">
                <code>source venv/bin/activate</code>
            </pre>
            <p id="db61298f-197c-4609-9d3d-4d85ec6ed53d" class=""></p>
            <p id="19e88719-259b-4cc5-a215-b36137f7ca88" class="">
                Check 
                <code>clang</code>
                 version in Mac
            </p>
            <pre id="98885fcf-8d5b-407e-9f71-b5f83d6eadd3" class="code">
                <code>clang --version</code>
            </pre>
            <p id="ed912f6e-de88-4e04-a884-181b88ebdb8a" class="">If it is 11.0, install the latest one (12.0). Installation might take long (30 mins)</p>
            <pre id="d71b7751-20c1-414f-8063-9cbfe4b30408" class="code">
                <code>sudo rm -rf /Library/Developer/CommandLineTools
                sudo xcode-select --install
                sudo xcode-select --switch /Library/Developer/CommandLineTools</code>
            </pre>
            <p id="9c6844ce-034a-4afb-bd00-3f823ea120ef" class="">
                Check 
                <code>clang --version</code>
                 again, make sure it 12.0
            </p>
            <p id="59fe98fb-7cc7-4855-9e50-1db0babec96c" class=""></p>
            <p id="4351282f-347b-42e4-91a7-746c9cc966c5" class="">Install pybullet</p>
            <pre id="929bd42c-1e23-449b-a2d4-16e4b7c59045" class="code">
                <code>pip3 install pybullet --upgrade</code>
            </pre>
            <p id="e6b1d351-cd5d-4336-a24e-eaa98adbb50d" class="">Install numpy 1.19</p>
            <pre id="7a17a17b-be48-4147-86ff-80dc63f3b0e2" class="code">
                <code>pip3 install numpy==1.19</code>
            </pre>
            <p id="86a86e43-1481-45e1-bc92-29f29325974a" class=""></p>
            <p id="0115ca8c-6762-435b-bae7-c42d19075579" class="">
                Remove 
                <code>pybullet</code>
                 and 
                <code>numpy</code>
                 from 
                <code>requirements.txt</code>
            </p>
            <p id="d23f0cac-3fba-4522-9275-aa57ff2297f5" class="">
                Install 
                <code>requirements.txt</code>
            </p>
            <pre id="42335a7d-9299-4cf0-8844-f8852de178fa" class="code">
                <code>pip3 install -r requirements.txt</code>
            </pre>
            <p id="58ce3831-6c44-4d56-9acc-290e95c5abe4" class=""></p>
            <p id="645987d6-9a26-4efd-8982-c4c7b0f14b4d" class="">Install SoMo</p>
            <pre id="af6787d9-8669-4e1a-a71a-7bb7e15b7704" class="code">
                <code>pip3 install -e .</code>
            </pre>
            <p id="2c58f951-c857-4b7c-8819-c0863cd40a13" class=""></p>
            <p id="f62dc198-1907-4fc7-bf56-bb71f7f05ef8" class="">Run test</p>
            <pre id="86e335f7-9700-471f-af07-478bf815543e" class="code">
                <code>python examples/iros2021/playing_ball/run_bb.py</code>
            </pre>
        </div>
    </article>
</body>
</html>

