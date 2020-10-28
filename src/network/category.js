import { request } from "./request";
export function getCategoryList() {
  return request({
    url: "category",
  });
}

export function getCategoryListItem(maitKey) {
  return request({
    url: "subcategory",
    params: { maitKey },
  });
}
export function getCategoryListDetail(miniWallkey,type) {
  return request({
    url: "subcategory/detail",
    params: {
      miniWallkey,
      type,
    },
  });
}
