import Head from 'next/head'
import React, { Component } from 'react'

export default class MetaPanel extends Component {
  render() {
    return (
      <Head>
        <title>Arabulucuyuz.org</title>
        <meta name="description" content="Arabuluculuk ve İcra Hukuku Konularında Uzman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Shake-hand.png" />
      </Head>
    )
  }
}
