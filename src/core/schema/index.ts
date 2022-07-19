import { PHONE_SCHEMA } from "@/helper"
import * as Yup from "yup"

export const UserAddressSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(PHONE_SCHEMA, "Vui lòng nhập số điện thoại hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
  name: Yup.string().min(2, "Tên không hợp lệ").required("Vui lòng nhập Họ Tên"),
  street: Yup.string()
    .matches(/[^A-Za-z0-9]+/, "Phải bao gồm số nhà và tên đường!")
    .required("Vui lòng nhập địa chỉ cụ thể"),
})

export const phoneNumberSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(PHONE_SCHEMA, "Vui lòng nhập số điện thoại hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
})

export const createPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  reNewPassword: Yup.string().oneOf(["newPassword"]),
})

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  newPassword: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  reNewPassword: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .oneOf([Yup.ref("newPassword")], "Mật khẩu xác nhận phải trung với mật khẩu mới")
    .required("Vui lòng nhập mật khẩu xác nhận"),
})

export const passwordSchema = Yup.object().shape({
  password: Yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
})

export const loginSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(PHONE_SCHEMA, "Vui lòng nhập số điện thoại hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
})

export const userInfoSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      PHONE_SCHEMA,
      "Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số và ký tự đặc biệt"
    )
    .required("Vui lòng nhập số điện thoại"),
  email: Yup.string().matches(
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    "Vui lòng nhập đúng định dạng email"
  ),
  name: Yup.string()
    .min(2, "Tên phải có tối thiểu 2 ký tự")
    .max(30, "Tên không vượt quá 30 ký tự")
    .required("Vui lòng nhập tên"),
  sex: Yup.string().oneOf(["male", "female"]).required("Vui lòng chọn giới tính"),
})

export const messageSchema = Yup.object().shape({
  message: Yup.string().required("Vui lòng nhập bình luận"),
})
