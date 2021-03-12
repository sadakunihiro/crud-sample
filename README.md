# CRUD SAMPLE
## はじめに

これは CRUD のサンプルアプリケーションです。
Kubernetes で動くアプリのサンプルとして作りました。

このサンプルは以下の3つポッドにデプロイされます。
- mongodb ... サンプルのデータとともにデプロイします
- api server ... REST API のリクエストに JSON データを返すだけのシンプルな API gateway
- frontend ... CRUD 機能だけのwebアプリ (NUXT使用)