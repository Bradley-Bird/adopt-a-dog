import { client, checkError } from './client';

export async function getDogs() {
  const resp = await client.from('dogs').select();
  return checkError(resp);
}

export async function createDog(dog) {
  const resp = await client.from('dogs').insert(dog);
  return checkError(resp);
}
