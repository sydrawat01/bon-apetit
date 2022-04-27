/**
 * FORM ERROR
 */
export type FormError = {
  path: string
  message: string
}
/**
 * NORM ERROR
 */
export type NormError = {
  message: string
}
/**
 * RES ERROR
 */
export type ResError = {
  errors?: FormError[]
} & Partial<NormError>
