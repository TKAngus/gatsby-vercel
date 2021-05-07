import React from "react"
import { Themed } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Header content. Link:<Themed.a href="http://example.com/">link text</Themed.a>
      {` `}
      Continue.
      <br />
      Line break
    </>
  )
}