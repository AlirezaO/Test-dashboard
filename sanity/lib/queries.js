import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && (defined($search) == false || title match $search || category match $search || author->name match $search)] | order(_createdAt desc){
        _id,
        title,
        slug,
        _createdAt,
        author -> {
            _id, name, image, bio
        },
        views,
        description,
        category,
        image
    }`);

export const AUTHOR_BY_GITHUB_ID_QUERY =
  defineQuery(`*[_type == "author" && id == $id][0]{
    _id, 
    id, 
    name, 
    username, 
    image, 
    email, 
    bio
    }`);

export const AUTHOR_BY_ID_OR_EMAIL_QUERY =
  defineQuery(`*[_type == "author" && (id == $id || email == $email)][0]{
    _id, 
    id, 
    name, 
    username, 
    image, 
    email, 
    bio
    }`);
