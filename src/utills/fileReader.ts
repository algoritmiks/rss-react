export const fileReader = (file: File): Promise<string> => {
  return new Promise<string>((res, rej) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => res(reader.result?.toString() ?? '')
    reader.onerror = (err) => rej(err)
  })
}
