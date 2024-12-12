import { error } from "@sveltejs/kit"

export function load({ params }) {
  const post = [
    { slug: "a", title: "a", content: "<b>a</b>eiou" },
    { slug: "b", title: "b", content: "<b>a</b>eiou" },
  ].find((post) => post.slug === params.slug)

  if (!post) error(404)

  return {
    post,
  }
}
