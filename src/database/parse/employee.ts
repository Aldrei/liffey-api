export const employeeParseEnToPt = <T>(source: any): T => ({
  id: source.id,
  user_id: source.user_id,
  client_id: source.client_id,
  city_id: source.city_id,
  neighborhood_id: source.neighborhood_id,
  nome: source.name,
  dataNascimento: source.birth_date,
  cargo: source.position,
  salarioBase: source.base_salary,
  creci: source.creci,
  usuarioDoSistema: source.system_user,
  ativo: source.active,
  estado: source.state,
  idCidade: source.idCidade,
  idBairro: source.idBairro,
  logradouro: source.street,
  numero: source.number,
  cep: source.zip_code,
  apto: source.apartment,
  email: source.email,
  email2: source.email2,
  celular: source.cellphone,
  fixo: source.phone,
  foto: source.photo,
  fotoMini: source.thumbnail,
  publicarNoSite: source.publish_on_website,
  oculto: source.hidden,
  created_at: source.created_at,
  updated_at: source.updated_at
}) as T