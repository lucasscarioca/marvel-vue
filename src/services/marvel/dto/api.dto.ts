export type Wrapper = {
  code?: number,
  status?: string,
  copyright?: string,
  attributionText?: string,
  attributionHTML?: string,
  etag?: string,
}

export type Data = {
  offset?: number,
  limit?: number,
  total?: number,
  count?: number,
}

export type Url = {
  type?: string,
  url?: string,
}

export type Image = {
  path?: string,
  extension?: string,
}