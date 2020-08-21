import React from "react"

const LuckyOrange = () => {
  const ref = React.useRef(null)

  window.__lo_site_id = 240726

  React.useEffect(() => {
    if (ref.current === null || process.env.NODE_ENV === "development") return
    const luckyOrangeScript = document.createElement("script")
    luckyOrangeScript.async = true
    luckyOrangeScript.type = "text/javascript"
    luckyOrangeScript.src = "https://d10lpsik1i8c69.cloudfront.net/w.js"
    ref.current.parentNode.insertBefore(luckyOrangeScript, ref.current)
  }, [ref.current])

  return <div ref={ref} name="lucky-orange" />
}

export default LuckyOrange
