# CRUD SAMPLE
## はじめに

これは CRUD のサンプルアプリケーションです。
Kubernetes で動くアプリのサンプルとして作りました。

このサンプルは以下の3つポッドにデプロイされます。
- mongodb ... サンプルのデータとともにデプロイします
- api server ... REST API のリクエストに JSON データを返すだけのシンプルなプログラム
- frontend ... CRUD の機能だけのプログラム (NUXT使用)