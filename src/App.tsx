/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-types */
import React, { Component } from 'react'
import HtmlRenderer from './HtmlRenderer'
import Presentkort from './Presentkort'

interface AppState {
  htmlContent: string
  loading: boolean
  error: string | null
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      htmlContent: '',
      loading: true,
      error: null,
    }
  }

  componentDidMount() {
    this.fetchHtmlContent()
  }

  fetchHtmlContent() {
    fetch('/presentkort')
      .then((response) => response.text())
      .then((html) => {
        const modifiedHtml = this.modifyHtml(html)
        this.setState({ htmlContent: modifiedHtml, loading: false })
      })
      .catch((error) => {
        console.error(error)
        this.setState({
          loading: false,
          error: 'Failed to fetch HTML content.',
        })
      })
  }

  modifyHtml(originalHtml: string) {
    const newText =
      '<p>Detta tillägg kommer från App.tsx innan det skickas till index.tsx och görs till bundle.js.</p>'
    const newElement = (
      <div>
        <h2>
          <Presentkort />
        </h2>
      </div>
    )
    const modifiedHtml = originalHtml + newText + newElement
    return modifiedHtml
  }

  render() {
    const { loading, error, htmlContent } = this.state

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: {error}</div>
    }

    return <HtmlRenderer htmlContent={htmlContent} />
  }
}
export default App
