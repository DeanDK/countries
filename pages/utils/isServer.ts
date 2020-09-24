export const isServer = () => {
  return !(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  )
}
