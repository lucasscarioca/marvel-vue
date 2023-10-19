export type Wrapper = {
  code?: Number,
  status?: string,
  copyright?: string,
  attributionText?: string,
  attributionHTML?: string,
  etag?: string,
}

export type Data = {
  offset?: Number,
  limit?: Number,
  total?: Number,
  count?: Number,
}

export type Url = {
  type?: string,
  url?: string,
}

export type Image = {
  path?: string,
  extension?: string,
}