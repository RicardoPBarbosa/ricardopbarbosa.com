export const track = (
  event?: string,
  payload?: Record<string, unknown>
): void => {
  // @ts-expect-error - umami is not defined in the global scope
  window.umami?.track(event, payload)
}
