# Connpass Hot Event
[![pages-build-deployment](https://github.com/hiroto-toriyama/connpass-events/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/hiroto-toriyama/connpass-events/actions/workflows/pages/pages-build-deployment)


## 概要

IT勉強会支援プラットフォーム「[connpass](https://connpass.com/)」の人気イベントを表示するアプリ。<br>
URL: https://relaxed-sfogliatella-6c4f61.netlify.app/

本日connpassで開催される人気イベント情報を開催時間順に表示している。<br>
参加人数でフィルターをかけることができ、人気イベントをピックアップして確認することができる。<br>
一週間先まで表示するイベントの日付を切り替え可能。


## 使用技術
* [connpass-eventsリポジトリ](https://github.com/hiroto-toriyama/connpass-events)側
  * TypeScript
  * React
  * Bootstrap
* [connpass-apiリポジトリ](https://github.com/hiroto-toriyama/connpass-api)側
  * Python
* 共通
  * GitHub Actions
  * GitHub Pages


## 動機・目的
私はよく[connpass](https://connpass.com/)のイベントに参加している。<br>
connpassは「エンジニアをつなぐIT勉強会支援プラットフォーム」であり、<br>
毎日たくさんのIT勉強会やイベントが掲載されている。

ITやエンジニアに関する知見を広げるため、毎日イベントをチェックしているが、<br>
多い時には一日100個近い勉強会が掲載されるため、確認するのが大変である。<br>
connpassも公式で[人気イベントランキング](https://connpass.com/ranking/)を提供しているが、<br>
こちらは日付や時間帯がごちゃまぜのランキングとなっているため、<br>
公式ランキングでは「今日開催」の人気イベントがわからない。<br>
また、個人的には参加者数20人以上程度のイベントは全部チェックしたいが、<br>
公式ランキングでは100人以上開催のイベントまでしか掲載されないことが多い。<br>
そのため、本日開催の人気イベントをピックアップできたら便利だと考えた。

また、フロントエンド開発に興味があり、モダンなフレームワークを使ってみたいと思ったため、<br>
React / TypeScript の学習も兼ねて本アプリを製作した。<br>
加えて、将来チーム開発を円滑に行えるように、Issue機能やGitHub Pages、GitHub Actionsを積極的に活用している。 


## 構成
* [connpass-eventsリポジトリ](https://github.com/hiroto-toriyama/connpass-events) → フロントエンドを提供
  * 下APIを用いてconnpassの人気イベント情報を表示するReactアプリ
  * 【GitHub Actions】master以外にpush時、自動ビルドテスト
  * 【GitHub Actions】masterにpush時、自動ビルド＆gh-pagesブランチへデプロイ
  * 【GitHub Pages】gh-pagesブランチを GitHub Pages で公開
  
* [connpass-apiリポジトリ](https://github.com/hiroto-toriyama/connpass-api) → APIを提供
  * フロントエンドから呼び出されるイベント一覧APIを1時間ごとにPythonで生成
  * 【GitHub Actions】master以外にpush時、自動ビルドテスト
  * 【GitHub Actions】masterにpush時、自動ビルド＆gh-pagesブランチへデプロイ
  * 【GitHub Actions】1時間に一回、自動ビルド＆gh-pagesブランチへデプロイ
  * 【GitHub Pages】gh-pagesブランチを GitHub Pages で公開


本アプリは、フロントエンドを提供する[connpass-eventsリポジトリ](https://github.com/hiroto-toriyama/connpass-events)と、APIを提供する[connpass-apiリポジトリ](https://github.com/hiroto-toriyama/connpass-api)で構成される。

レンタルサーバーやNetlify、Herokuなどのホスティングサービスの利用も考えたが、ランニングコストや管理のしやすさ等踏まえて、GitHub Pages を利用することにした。

人気があるイベントを取得するために、connpassが提供している[イベントサーチAPI](https://connpass.com/about/api/)を用いているが、このAPIはCORS非対応であるため、フロントエンドのみで解決することができない。<br>
そこで、[connpass-apiリポジトリ](https://github.com/hiroto-toriyama/connpass-api)側で GitHub Pages を Web API として使うことでこれを解決している。イベント情報はGitHub Actionsによって1時間に一回自動更新されるように設定している。

本アプリ開発は「Issue(チケット)駆動開発」を採用している。GitHubのIssue機能を用いてタスクを管理しており、ブランチはIssueごとに生成、ブランチで開発を進めて、最終的にmasterにプルリクエストを出してmergeする。また、pushされたときにGitHub Actionsによって自動ビルドテストが実行されるようになっており、mergeされる前にビルドが成功するかチェックすることができるようにしている。






