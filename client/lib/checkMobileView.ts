export default function checkMobileView(window: { innerWidth: number }) {
  if (window.innerWidth < 480) { return true }
  else { return false }
}
