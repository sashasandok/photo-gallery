const fs = require('fs')

const baseDataReplace = (data, imgType) => {
  let base64Data = ''
  if (imgType === 'image/png') {
    base64Data = data.replace(/^data:image\/png;base64,/, '')
  } else if (imgType === 'image/jpeg') {
    base64Data = data.replace(/^data:image\/jpeg;base64,/, '')
  } else if (imgType === 'image/jpg') {
    base64Data = data.replace(/^data:image\/jpg;base64,/, '')
  }
  return base64Data
}

const saveImage = (path, name, data, imgType) => {
  if (!fs.existsSync(path)) fs.mkdirSync(path)
  const base64Data = baseDataReplace(data, imgType)
  let size = fs.stat(data, info => info);
  console.log('size', size)
  fs.writeFileSync(`${path}/${name}`, base64Data, 'base64', err => {
    if(err) throw err
    console.log("Асинхронная запись файла завершена. Содержимое файла:")
    let data = fs.readFileSync(`${path}/${name}`)
    console.log(data.size);
  });
  return 'success'
}

const removeImage = async (path, name) => (
  await fs.rm(`${path}/${name}`, () => console.log('File successfuly deleted'))
)

module.exports = {
  saveImage,
  removeImage,
}