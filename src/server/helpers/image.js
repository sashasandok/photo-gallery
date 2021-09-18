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

const saveImage = async (path, name, data, imgType) => {
  if (!fs.existsSync(path)) fs.mkdirSync(path)
  const base64Data = baseDataReplace(data, imgType)
  return await fs.writeFile(`${path}/${name}`, base64Data, 'base64', () => result = 'success')
}

const removeImage = async (path, name) => (
  await fs.rm(`${path}/${name}`, () => console.log('File successfuly deleted'))
)

module.exports = {
  saveImage,
  removeImage,
}