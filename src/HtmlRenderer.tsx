// HtmlRenderer.tsx
import React from 'react'

interface HtmlRendererProps {
  htmlContent: string
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ htmlContent }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}

export default HtmlRenderer
