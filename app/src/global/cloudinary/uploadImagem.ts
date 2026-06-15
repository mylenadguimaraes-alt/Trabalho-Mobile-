export async function uploadImagem(
  uri: string
) {

  const formData = new FormData();

  formData.append(
    'file',
    {
      uri,
      type: 'image/jpeg',
      name: 'imagem.jpg',
    } as any
  );

  formData.append(
    'upload_preset',
    'ml_default'
  );

  const response = await fetch(
    'https://api.cloudinary.com/v1_1/dhdwpxqjl/image/upload',
    {
      method: 'POST',
      body: formData,
    }
  );

  const data = await response.json();

  return data.secure_url;

}