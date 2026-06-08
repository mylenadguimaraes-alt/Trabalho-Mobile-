import { db } from './conexaobd';

export const listarBanners = () => {

  if (!db) return [];

  return db.getAllSync(`
    SELECT *
    FROM banner
    ORDER BY id DESC
  `);

};

export const criarBanner = (
  titulo: string,
  imagem: string
) => {

  if (!db) return;

  db.runSync(
    `
    INSERT INTO banner
    (
      titulo,
      imagem
    )
    VALUES
    (
      ?,
      ?
    )
    `,
    [
      titulo,
      imagem
    ]
  );

};

export const excluirBanner = (
  id: number
) => {

  if (!db) return;

  db.runSync(
    `
    DELETE FROM banner
    WHERE id = ?
    `,
    [id]
  );

};
export const obterBannerPrincipal = () => {

  if (!db) return null;

  const banners = db.getAllSync(`
    SELECT *
    FROM banner
    ORDER BY id DESC
    LIMIT 1
  `);

  return banners[0];

};