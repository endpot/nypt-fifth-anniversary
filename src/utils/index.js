/**
 * @description
 * @param {number} size
 */
export function calcSize (size) {
  if (typeof (size) === 'string') {
    size = +size
  }
  const Byte = size
  const KiB = Byte / 1024
  const MiB = KiB / 1024
  const GiB = MiB / 1024
  return GiB.toFixed(2)
}

/**
 * @param {number} time
 * @returns
 */
export function calcTimes (time) {
  if (typeof (time) === 'string') {
    time = +time
  }
  const second = time
  const minute = second / 60
  const hour = minute / 60
  const day = hour / 24
  return day.toFixed(2)
}
