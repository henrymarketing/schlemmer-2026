import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'de');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor', 'researcher');
  CREATE TYPE "public"."enum_media_rights" AS ENUM('estate-owned', 'licensed', 'public-domain');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_max_width" AS ENUM('prose', 'wide', 'full');
  CREATE TYPE "public"."enum_pages_blocks_image_block_size" AS ENUM('small', 'medium', 'large', 'full-bleed');
  CREATE TYPE "public"."enum_pages_blocks_two_column_layout" AS ENUM('text-image', 'image-text', 'text-text');
  CREATE TYPE "public"."enum_pages_blocks_video_embed_platform" AS ENUM('youtube', 'vimeo');
  CREATE TYPE "public"."enum_pages_blocks_image_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_quote_size" AS ENUM('large', 'normal');
  CREATE TYPE "public"."enum_pages_blocks_cta_style" AS ENUM('outline', 'filled', 'text');
  CREATE TYPE "public"."enum_pages_blocks_cta_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_divider_spacing" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_max_width" AS ENUM('prose', 'wide', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_image_block_size" AS ENUM('small', 'medium', 'large', 'full-bleed');
  CREATE TYPE "public"."enum__pages_v_blocks_two_column_layout" AS ENUM('text-image', 'image-text', 'text-text');
  CREATE TYPE "public"."enum__pages_v_blocks_video_embed_platform" AS ENUM('youtube', 'vimeo');
  CREATE TYPE "public"."enum__pages_v_blocks_image_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_quote_size" AS ENUM('large', 'normal');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_style" AS ENUM('outline', 'filled', 'text');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_divider_spacing" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'de');
  CREATE TYPE "public"."enum_artworks_category" AS ENUM('painting', 'watercolour', 'pastel', 'drawing', 'sculpture', 'stage-design', 'wall-design', 'mural', 'print', 'photograph', 'other');
  CREATE TYPE "public"."enum_exhibitions_type" AS ENUM('solo', 'group', 'retrospective');
  CREATE TYPE "public"."enum_bibliography_type" AS ENUM('book', 'essay', 'review', 'catalogue', 'article');
  CREATE TYPE "public"."enum_features_blocks_rich_text_max_width" AS ENUM('prose', 'wide', 'full');
  CREATE TYPE "public"."enum_features_blocks_image_block_size" AS ENUM('small', 'medium', 'large', 'full-bleed');
  CREATE TYPE "public"."enum_features_blocks_two_column_layout" AS ENUM('text-image', 'image-text', 'text-text');
  CREATE TYPE "public"."enum_features_blocks_video_embed_platform" AS ENUM('youtube', 'vimeo');
  CREATE TYPE "public"."enum_features_blocks_image_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_features_blocks_quote_size" AS ENUM('large', 'normal');
  CREATE TYPE "public"."enum_features_blocks_divider_spacing" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_features_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__features_v_blocks_rich_text_max_width" AS ENUM('prose', 'wide', 'full');
  CREATE TYPE "public"."enum__features_v_blocks_image_block_size" AS ENUM('small', 'medium', 'large', 'full-bleed');
  CREATE TYPE "public"."enum__features_v_blocks_two_column_layout" AS ENUM('text-image', 'image-text', 'text-text');
  CREATE TYPE "public"."enum__features_v_blocks_video_embed_platform" AS ENUM('youtube', 'vimeo');
  CREATE TYPE "public"."enum__features_v_blocks_image_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__features_v_blocks_quote_size" AS ENUM('large', 'normal');
  CREATE TYPE "public"."enum__features_v_blocks_divider_spacing" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__features_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__features_v_published_locale" AS ENUM('en', 'de');
  CREATE TYPE "public"."enum_communiques_blocks_rich_text_max_width" AS ENUM('prose', 'wide', 'full');
  CREATE TYPE "public"."enum_communiques_blocks_image_block_size" AS ENUM('small', 'medium', 'large', 'full-bleed');
  CREATE TYPE "public"."enum_communiques_blocks_video_embed_platform" AS ENUM('youtube', 'vimeo');
  CREATE TYPE "public"."enum_communiques_blocks_divider_spacing" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_communiques_category" AS ENUM('exhibition', 'auction', 'publication', 'event', 'legal', 'other');
  CREATE TYPE "public"."enum_communiques_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__communiques_v_blocks_rich_text_max_width" AS ENUM('prose', 'wide', 'full');
  CREATE TYPE "public"."enum__communiques_v_blocks_image_block_size" AS ENUM('small', 'medium', 'large', 'full-bleed');
  CREATE TYPE "public"."enum__communiques_v_blocks_video_embed_platform" AS ENUM('youtube', 'vimeo');
  CREATE TYPE "public"."enum__communiques_v_blocks_divider_spacing" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__communiques_v_version_category" AS ENUM('exhibition', 'auction', 'publication', 'event', 'legal', 'other');
  CREATE TYPE "public"."enum__communiques_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__communiques_v_published_locale" AS ENUM('en', 'de');
  CREATE TYPE "public"."enum_people_blocks_rich_text_max_width" AS ENUM('prose', 'wide', 'full');
  CREATE TYPE "public"."enum_people_blocks_image_block_size" AS ENUM('small', 'medium', 'large', 'full-bleed');
  CREATE TYPE "public"."enum_people_blocks_two_column_layout" AS ENUM('text-image', 'image-text', 'text-text');
  CREATE TYPE "public"."enum_people_blocks_video_embed_platform" AS ENUM('youtube', 'vimeo');
  CREATE TYPE "public"."enum_people_blocks_quote_size" AS ENUM('large', 'normal');
  CREATE TYPE "public"."enum_people_blocks_divider_spacing" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_friends_type" AS ENUM('exhibition', 'event', 'artist', 'institution', 'other');
  CREATE TYPE "public"."enum_authentication_requests_categories" AS ENUM('authentication', 'reproduction', 'provenance', 'artmarket', 'academia', 'media', 'trademark');
  CREATE TYPE "public"."enum_authentication_requests_status" AS ENUM('new', 'in-review', 'responded', 'closed');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_redirects_type" AS ENUM('301', '302');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"credit" varchar DEFAULT '© Archiv C. Raman Schlemmer' NOT NULL,
  	"rights" "enum_media_rights" DEFAULT 'estate-owned' NOT NULL,
  	"artwork_reference_id" integer,
  	"legacy_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_hero_carousel_slides_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"autoplay" boolean DEFAULT true,
  	"interval_ms" numeric DEFAULT 5000,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_anniversary_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_anniversary_banner_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"overlay" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_locales" (
  	"heading" varchar,
  	"subheading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"max_width" "enum_pages_blocks_rich_text_max_width" DEFAULT 'prose',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"size" "enum_pages_blocks_image_block_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_block_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_two_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_two_column_layout" DEFAULT 'text-image',
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_two_column_locales" (
  	"left_content" jsonb,
  	"right_content" jsonb,
  	"text" jsonb,
  	"image_caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_timeline_entries" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_timeline_entries_locales" (
  	"event" varchar,
  	"detail" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_pages_blocks_video_embed_platform" DEFAULT 'youtube',
  	"video_id" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video_embed_locales" (
  	"title" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_iframe_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"src" varchar,
  	"height" numeric DEFAULT 650,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_iframe_embed_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_image_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_image_grid_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_image_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_pages_blocks_image_grid_columns" DEFAULT '3',
  	"lightbox" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_quote_size" DEFAULT 'large',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_quote_locales" (
  	"text" varchar,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum_pages_blocks_cta_style" DEFAULT 'outline',
  	"align" "enum_pages_blocks_cta_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_pages_blocks_divider_spacing" DEFAULT 'medium',
  	"show_rule" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"legacy_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_carousel_slides_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"autoplay" boolean DEFAULT true,
  	"interval_ms" numeric DEFAULT 5000,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_anniversary_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_anniversary_banner_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"overlay" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_locales" (
  	"heading" varchar,
  	"subheading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"max_width" "enum__pages_v_blocks_rich_text_max_width" DEFAULT 'prose',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"size" "enum__pages_v_blocks_image_block_size" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_block_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_two_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_two_column_layout" DEFAULT 'text-image',
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_two_column_locales" (
  	"left_content" jsonb,
  	"right_content" jsonb,
  	"text" jsonb,
  	"image_caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_entries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_entries_locales" (
  	"event" varchar,
  	"detail" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__pages_v_blocks_video_embed_platform" DEFAULT 'youtube',
  	"video_id" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video_embed_locales" (
  	"title" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_iframe_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"src" varchar,
  	"height" numeric DEFAULT 650,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_iframe_embed_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_image_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_grid_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_image_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__pages_v_blocks_image_grid_columns" DEFAULT '3',
  	"lightbox" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_quote_size" DEFAULT 'large',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_quote_locales" (
  	"text" varchar,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"style" "enum__pages_v_blocks_cta_style" DEFAULT 'outline',
  	"align" "enum__pages_v_blocks_cta_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"spacing" "enum__pages_v_blocks_divider_spacing" DEFAULT 'medium',
  	"show_rule" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_legacy_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "artworks_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"is_primary" boolean DEFAULT false,
  	"credit" varchar
  );
  
  CREATE TABLE "artworks" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_italic" boolean DEFAULT true,
  	"year" numeric,
  	"year_end" numeric,
  	"catalogue_number" varchar,
  	"category" "enum_artworks_category" NOT NULL,
  	"dimensions" varchar,
  	"credit_line" varchar,
  	"slug" varchar,
  	"legacy_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "artworks_locales" (
  	"title" varchar NOT NULL,
  	"alternate_title" varchar,
  	"medium" varchar,
  	"description" jsonb,
  	"provenance" jsonb,
  	"current_location" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "artworks_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"exhibitions_id" integer,
  	"bibliography_id" integer,
  	"artworks_id" integer
  );
  
  CREATE TABLE "exhibitions_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "exhibitions_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "exhibitions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"venue" varchar,
  	"city" varchar,
  	"country" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"type" "enum_exhibitions_type",
  	"catalogue" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "exhibitions_locales" (
  	"title" varchar NOT NULL,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "exhibitions_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"artworks_id" integer
  );
  
  CREATE TABLE "bibliography_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE "bibliography" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"type" "enum_bibliography_type",
  	"publisher" varchar,
  	"isbn" varchar,
  	"url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "bibliography_locales" (
  	"title" varchar NOT NULL,
  	"citation" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "features_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"max_width" "enum_features_blocks_rich_text_max_width" DEFAULT 'prose',
  	"block_name" varchar
  );
  
  CREATE TABLE "features_blocks_rich_text_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"size" "enum_features_blocks_image_block_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "features_blocks_image_block_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_blocks_two_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_features_blocks_two_column_layout" DEFAULT 'text-image',
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "features_blocks_two_column_locales" (
  	"left_content" jsonb,
  	"right_content" jsonb,
  	"text" jsonb,
  	"image_caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_blocks_video_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_features_blocks_video_embed_platform" DEFAULT 'youtube',
  	"video_id" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "features_blocks_video_embed_locales" (
  	"title" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_blocks_image_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "features_blocks_image_grid_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_blocks_image_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_features_blocks_image_grid_columns" DEFAULT '3',
  	"lightbox" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "features_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_features_blocks_quote_size" DEFAULT 'large',
  	"block_name" varchar
  );
  
  CREATE TABLE "features_blocks_quote_locales" (
  	"text" varchar,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "features_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_features_blocks_divider_spacing" DEFAULT 'medium',
  	"show_rule" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "features_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "features" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"author" varchar DEFAULT 'C. Raman Schlemmer',
  	"date" timestamp(3) with time zone,
  	"hero_image_id" integer,
  	"slug" varchar,
  	"legacy_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_features_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "features_locales" (
  	"title" varchar,
  	"subtitle" varchar,
  	"summary" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "features_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"artworks_id" integer
  );
  
  CREATE TABLE "_features_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"max_width" "enum__features_v_blocks_rich_text_max_width" DEFAULT 'prose',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_features_v_blocks_rich_text_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"size" "enum__features_v_blocks_image_block_size" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_features_v_blocks_image_block_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_blocks_two_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__features_v_blocks_two_column_layout" DEFAULT 'text-image',
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_features_v_blocks_two_column_locales" (
  	"left_content" jsonb,
  	"right_content" jsonb,
  	"text" jsonb,
  	"image_caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_blocks_video_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__features_v_blocks_video_embed_platform" DEFAULT 'youtube',
  	"video_id" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_features_v_blocks_video_embed_locales" (
  	"title" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_blocks_image_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_v_blocks_image_grid_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_blocks_image_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__features_v_blocks_image_grid_columns" DEFAULT '3',
  	"lightbox" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_features_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__features_v_blocks_quote_size" DEFAULT 'large',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_features_v_blocks_quote_locales" (
  	"text" varchar,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"spacing" "enum__features_v_blocks_divider_spacing" DEFAULT 'medium',
  	"show_rule" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_features_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_features_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_author" varchar DEFAULT 'C. Raman Schlemmer',
  	"version_date" timestamp(3) with time zone,
  	"version_hero_image_id" integer,
  	"version_slug" varchar,
  	"version_legacy_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__features_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__features_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_features_v_locales" (
  	"version_title" varchar,
  	"version_subtitle" varchar,
  	"version_summary" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_features_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"artworks_id" integer
  );
  
  CREATE TABLE "communiques_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"max_width" "enum_communiques_blocks_rich_text_max_width" DEFAULT 'prose',
  	"block_name" varchar
  );
  
  CREATE TABLE "communiques_blocks_rich_text_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "communiques_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"size" "enum_communiques_blocks_image_block_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "communiques_blocks_image_block_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "communiques_blocks_video_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_communiques_blocks_video_embed_platform" DEFAULT 'youtube',
  	"video_id" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "communiques_blocks_video_embed_locales" (
  	"title" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "communiques_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_communiques_blocks_divider_spacing" DEFAULT 'medium',
  	"show_rule" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "communiques_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "communiques_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "communiques_external_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "communiques_external_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "communiques_attachments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"file_id" integer
  );
  
  CREATE TABLE "communiques_attachments_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "communiques" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"category" "enum_communiques_category",
  	"slug" varchar,
  	"legacy_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_communiques_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "communiques_locales" (
  	"title" varchar,
  	"summary" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_communiques_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"max_width" "enum__communiques_v_blocks_rich_text_max_width" DEFAULT 'prose',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_communiques_v_blocks_rich_text_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_communiques_v_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"size" "enum__communiques_v_blocks_image_block_size" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_communiques_v_blocks_image_block_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_communiques_v_blocks_video_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__communiques_v_blocks_video_embed_platform" DEFAULT 'youtube',
  	"video_id" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_communiques_v_blocks_video_embed_locales" (
  	"title" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_communiques_v_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"spacing" "enum__communiques_v_blocks_divider_spacing" DEFAULT 'medium',
  	"show_rule" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_communiques_v_version_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_communiques_v_version_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_communiques_v_version_external_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_communiques_v_version_external_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_communiques_v_version_attachments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"file_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_communiques_v_version_attachments_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_communiques_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_date" timestamp(3) with time zone,
  	"version_category" "enum__communiques_v_version_category",
  	"version_slug" varchar,
  	"version_legacy_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__communiques_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__communiques_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_communiques_v_locales" (
  	"version_title" varchar,
  	"version_summary" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "people_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"max_width" "enum_people_blocks_rich_text_max_width" DEFAULT 'prose',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_rich_text_locales" (
  	"content" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "people_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"size" "enum_people_blocks_image_block_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_image_block_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "people_blocks_two_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_people_blocks_two_column_layout" DEFAULT 'text-image',
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_two_column_locales" (
  	"left_content" jsonb,
  	"right_content" jsonb,
  	"text" jsonb,
  	"image_caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "people_blocks_timeline_entries" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "people_blocks_timeline_entries_locales" (
  	"event" varchar NOT NULL,
  	"detail" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "people_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_video_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_people_blocks_video_embed_platform" DEFAULT 'youtube' NOT NULL,
  	"video_id" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_video_embed_locales" (
  	"title" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "people_blocks_iframe_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"src" varchar NOT NULL,
  	"height" numeric DEFAULT 650,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_iframe_embed_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "people_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_people_blocks_quote_size" DEFAULT 'large',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_quote_locales" (
  	"text" varchar NOT NULL,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "people_blocks_divider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_people_blocks_divider_spacing" DEFAULT 'medium',
  	"show_rule" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "people" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"portrait_id" integer,
  	"birth_date" varchar,
  	"death_date" varchar,
  	"legacy_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "people_locales" (
  	"role" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "we_remember_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "we_remember_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "we_remember_external_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "we_remember" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"birth_year" numeric,
  	"death_year" numeric,
  	"sort_order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "we_remember_locales" (
  	"role" varchar,
  	"relationship" varchar,
  	"tribute" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "friends_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "friends_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "friends" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"type" "enum_friends_type" NOT NULL,
  	"url" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"logo_id" integer,
  	"active" boolean DEFAULT true,
  	"sort_order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "friends_locales" (
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "authentication_requests_categories" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_authentication_requests_categories",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "authentication_requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar NOT NULL,
  	"last_name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"institution" varchar,
  	"street" varchar,
  	"city" varchar,
  	"zip" varchar,
  	"country" varchar,
  	"reference" varchar,
  	"website" varchar,
  	"request_type" varchar NOT NULL,
  	"declaration_accepted" boolean DEFAULT false NOT NULL,
  	"submitted_at" timestamp(3) with time zone,
  	"status" "enum_authentication_requests_status" DEFAULT 'new',
  	"notes" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"type" "enum_redirects_type" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"artworks_id" integer,
  	"exhibitions_id" integer,
  	"bibliography_id" integer,
  	"features_id" integer,
  	"communiques_id" integer,
  	"people_id" integer,
  	"we_remember_id" integer,
  	"friends_id" integer,
  	"authentication_requests_id" integer,
  	"redirects_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "navigation_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL,
  	"external" boolean DEFAULT false
  );
  
  CREATE TABLE "navigation_items_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"og_image_id" integer,
  	"estate_credit" varchar DEFAULT '© The Oskar Schlemmer Theatre Archives',
  	"contact_email" varchar,
  	"right_click_protection" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "settings_locales" (
  	"site_title" varchar DEFAULT 'Oskar Schlemmer',
  	"site_description" varchar,
  	"copyright_line" varchar DEFAULT '© 2025 C. Raman Schlemmer. All rights reserved. ®',
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media" ADD CONSTRAINT "media_artwork_reference_id_artworks_id_fk" FOREIGN KEY ("artwork_reference_id") REFERENCES "public"."artworks"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_carousel_slides" ADD CONSTRAINT "pages_blocks_hero_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_carousel_slides" ADD CONSTRAINT "pages_blocks_hero_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_carousel_slides_locales" ADD CONSTRAINT "pages_blocks_hero_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_carousel" ADD CONSTRAINT "pages_blocks_hero_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_anniversary_banner" ADD CONSTRAINT "pages_blocks_anniversary_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_anniversary_banner_locales" ADD CONSTRAINT "pages_blocks_anniversary_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_anniversary_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_locales" ADD CONSTRAINT "pages_blocks_hero_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text_locales" ADD CONSTRAINT "pages_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_block" ADD CONSTRAINT "pages_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_block" ADD CONSTRAINT "pages_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_block_locales" ADD CONSTRAINT "pages_blocks_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_column" ADD CONSTRAINT "pages_blocks_two_column_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_column" ADD CONSTRAINT "pages_blocks_two_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_column_locales" ADD CONSTRAINT "pages_blocks_two_column_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_two_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_entries" ADD CONSTRAINT "pages_blocks_timeline_entries_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_entries" ADD CONSTRAINT "pages_blocks_timeline_entries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_entries_locales" ADD CONSTRAINT "pages_blocks_timeline_entries_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline_entries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline" ADD CONSTRAINT "pages_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_embed" ADD CONSTRAINT "pages_blocks_video_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_embed_locales" ADD CONSTRAINT "pages_blocks_video_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_iframe_embed" ADD CONSTRAINT "pages_blocks_iframe_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_iframe_embed_locales" ADD CONSTRAINT "pages_blocks_iframe_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_iframe_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_grid_images" ADD CONSTRAINT "pages_blocks_image_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_grid_images" ADD CONSTRAINT "pages_blocks_image_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_grid_images_locales" ADD CONSTRAINT "pages_blocks_image_grid_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_grid_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_grid" ADD CONSTRAINT "pages_blocks_image_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quote" ADD CONSTRAINT "pages_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quote_locales" ADD CONSTRAINT "pages_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_locales" ADD CONSTRAINT "pages_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_divider" ADD CONSTRAINT "pages_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_carousel_slides" ADD CONSTRAINT "_pages_v_blocks_hero_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_carousel_slides" ADD CONSTRAINT "_pages_v_blocks_hero_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_carousel_slides_locales" ADD CONSTRAINT "_pages_v_blocks_hero_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_carousel" ADD CONSTRAINT "_pages_v_blocks_hero_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_anniversary_banner" ADD CONSTRAINT "_pages_v_blocks_anniversary_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_anniversary_banner_locales" ADD CONSTRAINT "_pages_v_blocks_anniversary_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_anniversary_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_locales" ADD CONSTRAINT "_pages_v_blocks_hero_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text_locales" ADD CONSTRAINT "_pages_v_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_block" ADD CONSTRAINT "_pages_v_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_block" ADD CONSTRAINT "_pages_v_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_block_locales" ADD CONSTRAINT "_pages_v_blocks_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_column" ADD CONSTRAINT "_pages_v_blocks_two_column_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_column" ADD CONSTRAINT "_pages_v_blocks_two_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_column_locales" ADD CONSTRAINT "_pages_v_blocks_two_column_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_two_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_entries" ADD CONSTRAINT "_pages_v_blocks_timeline_entries_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_entries" ADD CONSTRAINT "_pages_v_blocks_timeline_entries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_entries_locales" ADD CONSTRAINT "_pages_v_blocks_timeline_entries_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline_entries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline" ADD CONSTRAINT "_pages_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_embed" ADD CONSTRAINT "_pages_v_blocks_video_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video_embed_locales" ADD CONSTRAINT "_pages_v_blocks_video_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_video_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_iframe_embed" ADD CONSTRAINT "_pages_v_blocks_iframe_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_iframe_embed_locales" ADD CONSTRAINT "_pages_v_blocks_iframe_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_iframe_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_grid_images" ADD CONSTRAINT "_pages_v_blocks_image_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_grid_images" ADD CONSTRAINT "_pages_v_blocks_image_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_grid_images_locales" ADD CONSTRAINT "_pages_v_blocks_image_grid_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_grid_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_grid" ADD CONSTRAINT "_pages_v_blocks_image_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quote" ADD CONSTRAINT "_pages_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quote_locales" ADD CONSTRAINT "_pages_v_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_locales" ADD CONSTRAINT "_pages_v_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_divider" ADD CONSTRAINT "_pages_v_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artworks_images" ADD CONSTRAINT "artworks_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "artworks_images" ADD CONSTRAINT "artworks_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."artworks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artworks_locales" ADD CONSTRAINT "artworks_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "artworks_locales" ADD CONSTRAINT "artworks_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."artworks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artworks_rels" ADD CONSTRAINT "artworks_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."artworks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artworks_rels" ADD CONSTRAINT "artworks_rels_exhibitions_fk" FOREIGN KEY ("exhibitions_id") REFERENCES "public"."exhibitions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artworks_rels" ADD CONSTRAINT "artworks_rels_bibliography_fk" FOREIGN KEY ("bibliography_id") REFERENCES "public"."bibliography"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artworks_rels" ADD CONSTRAINT "artworks_rels_artworks_fk" FOREIGN KEY ("artworks_id") REFERENCES "public"."artworks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exhibitions_images" ADD CONSTRAINT "exhibitions_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "exhibitions_images" ADD CONSTRAINT "exhibitions_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."exhibitions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exhibitions_images_locales" ADD CONSTRAINT "exhibitions_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."exhibitions_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exhibitions_locales" ADD CONSTRAINT "exhibitions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."exhibitions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exhibitions_rels" ADD CONSTRAINT "exhibitions_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."exhibitions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exhibitions_rels" ADD CONSTRAINT "exhibitions_rels_artworks_fk" FOREIGN KEY ("artworks_id") REFERENCES "public"."artworks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "bibliography_authors" ADD CONSTRAINT "bibliography_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."bibliography"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "bibliography_locales" ADD CONSTRAINT "bibliography_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."bibliography"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_rich_text" ADD CONSTRAINT "features_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_rich_text_locales" ADD CONSTRAINT "features_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_image_block" ADD CONSTRAINT "features_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_blocks_image_block" ADD CONSTRAINT "features_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_image_block_locales" ADD CONSTRAINT "features_blocks_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks_image_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_two_column" ADD CONSTRAINT "features_blocks_two_column_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_blocks_two_column" ADD CONSTRAINT "features_blocks_two_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_two_column_locales" ADD CONSTRAINT "features_blocks_two_column_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks_two_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_video_embed" ADD CONSTRAINT "features_blocks_video_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_video_embed_locales" ADD CONSTRAINT "features_blocks_video_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks_video_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_image_grid_images" ADD CONSTRAINT "features_blocks_image_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_blocks_image_grid_images" ADD CONSTRAINT "features_blocks_image_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks_image_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_image_grid_images_locales" ADD CONSTRAINT "features_blocks_image_grid_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks_image_grid_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_image_grid" ADD CONSTRAINT "features_blocks_image_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_quote" ADD CONSTRAINT "features_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_quote_locales" ADD CONSTRAINT "features_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_blocks_divider" ADD CONSTRAINT "features_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_tags" ADD CONSTRAINT "features_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features" ADD CONSTRAINT "features_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_locales" ADD CONSTRAINT "features_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "features_locales" ADD CONSTRAINT "features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_rels" ADD CONSTRAINT "features_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "features_rels" ADD CONSTRAINT "features_rels_artworks_fk" FOREIGN KEY ("artworks_id") REFERENCES "public"."artworks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_rich_text" ADD CONSTRAINT "_features_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_rich_text_locales" ADD CONSTRAINT "_features_v_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_image_block" ADD CONSTRAINT "_features_v_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_image_block" ADD CONSTRAINT "_features_v_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_image_block_locales" ADD CONSTRAINT "_features_v_blocks_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_blocks_image_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_two_column" ADD CONSTRAINT "_features_v_blocks_two_column_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_two_column" ADD CONSTRAINT "_features_v_blocks_two_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_two_column_locales" ADD CONSTRAINT "_features_v_blocks_two_column_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_blocks_two_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_video_embed" ADD CONSTRAINT "_features_v_blocks_video_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_video_embed_locales" ADD CONSTRAINT "_features_v_blocks_video_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_blocks_video_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_image_grid_images" ADD CONSTRAINT "_features_v_blocks_image_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_image_grid_images" ADD CONSTRAINT "_features_v_blocks_image_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_blocks_image_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_image_grid_images_locales" ADD CONSTRAINT "_features_v_blocks_image_grid_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_blocks_image_grid_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_image_grid" ADD CONSTRAINT "_features_v_blocks_image_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_quote" ADD CONSTRAINT "_features_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_quote_locales" ADD CONSTRAINT "_features_v_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_blocks_divider" ADD CONSTRAINT "_features_v_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_version_tags" ADD CONSTRAINT "_features_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v" ADD CONSTRAINT "_features_v_parent_id_features_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."features"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_v" ADD CONSTRAINT "_features_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_v_locales" ADD CONSTRAINT "_features_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_features_v_locales" ADD CONSTRAINT "_features_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_rels" ADD CONSTRAINT "_features_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_features_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_features_v_rels" ADD CONSTRAINT "_features_v_rels_artworks_fk" FOREIGN KEY ("artworks_id") REFERENCES "public"."artworks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_blocks_rich_text" ADD CONSTRAINT "communiques_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_blocks_rich_text_locales" ADD CONSTRAINT "communiques_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_blocks_image_block" ADD CONSTRAINT "communiques_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "communiques_blocks_image_block" ADD CONSTRAINT "communiques_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_blocks_image_block_locales" ADD CONSTRAINT "communiques_blocks_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques_blocks_image_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_blocks_video_embed" ADD CONSTRAINT "communiques_blocks_video_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_blocks_video_embed_locales" ADD CONSTRAINT "communiques_blocks_video_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques_blocks_video_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_blocks_divider" ADD CONSTRAINT "communiques_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_images" ADD CONSTRAINT "communiques_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "communiques_images" ADD CONSTRAINT "communiques_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_images_locales" ADD CONSTRAINT "communiques_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_external_links" ADD CONSTRAINT "communiques_external_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_external_links_locales" ADD CONSTRAINT "communiques_external_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques_external_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_attachments" ADD CONSTRAINT "communiques_attachments_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "communiques_attachments" ADD CONSTRAINT "communiques_attachments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_attachments_locales" ADD CONSTRAINT "communiques_attachments_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques_attachments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communiques_locales" ADD CONSTRAINT "communiques_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "communiques_locales" ADD CONSTRAINT "communiques_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."communiques"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_blocks_rich_text" ADD CONSTRAINT "_communiques_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_blocks_rich_text_locales" ADD CONSTRAINT "_communiques_v_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_blocks_image_block" ADD CONSTRAINT "_communiques_v_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_communiques_v_blocks_image_block" ADD CONSTRAINT "_communiques_v_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_blocks_image_block_locales" ADD CONSTRAINT "_communiques_v_blocks_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v_blocks_image_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_blocks_video_embed" ADD CONSTRAINT "_communiques_v_blocks_video_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_blocks_video_embed_locales" ADD CONSTRAINT "_communiques_v_blocks_video_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v_blocks_video_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_blocks_divider" ADD CONSTRAINT "_communiques_v_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_version_images" ADD CONSTRAINT "_communiques_v_version_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_communiques_v_version_images" ADD CONSTRAINT "_communiques_v_version_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_version_images_locales" ADD CONSTRAINT "_communiques_v_version_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v_version_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_version_external_links" ADD CONSTRAINT "_communiques_v_version_external_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_version_external_links_locales" ADD CONSTRAINT "_communiques_v_version_external_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v_version_external_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_version_attachments" ADD CONSTRAINT "_communiques_v_version_attachments_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_communiques_v_version_attachments" ADD CONSTRAINT "_communiques_v_version_attachments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v_version_attachments_locales" ADD CONSTRAINT "_communiques_v_version_attachments_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v_version_attachments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_communiques_v" ADD CONSTRAINT "_communiques_v_parent_id_communiques_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."communiques"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_communiques_v_locales" ADD CONSTRAINT "_communiques_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_communiques_v_locales" ADD CONSTRAINT "_communiques_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_communiques_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_rich_text" ADD CONSTRAINT "people_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_rich_text_locales" ADD CONSTRAINT "people_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_image_block" ADD CONSTRAINT "people_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_image_block" ADD CONSTRAINT "people_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_image_block_locales" ADD CONSTRAINT "people_blocks_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_image_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_two_column" ADD CONSTRAINT "people_blocks_two_column_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_two_column" ADD CONSTRAINT "people_blocks_two_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_two_column_locales" ADD CONSTRAINT "people_blocks_two_column_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_two_column"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_timeline_entries" ADD CONSTRAINT "people_blocks_timeline_entries_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_timeline_entries" ADD CONSTRAINT "people_blocks_timeline_entries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_timeline_entries_locales" ADD CONSTRAINT "people_blocks_timeline_entries_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_timeline_entries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_timeline" ADD CONSTRAINT "people_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_video_embed" ADD CONSTRAINT "people_blocks_video_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_video_embed_locales" ADD CONSTRAINT "people_blocks_video_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_video_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_iframe_embed" ADD CONSTRAINT "people_blocks_iframe_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_iframe_embed_locales" ADD CONSTRAINT "people_blocks_iframe_embed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_iframe_embed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_quote" ADD CONSTRAINT "people_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_quote_locales" ADD CONSTRAINT "people_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_divider" ADD CONSTRAINT "people_blocks_divider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people" ADD CONSTRAINT "people_portrait_id_media_id_fk" FOREIGN KEY ("portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_locales" ADD CONSTRAINT "people_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_locales" ADD CONSTRAINT "people_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "we_remember_images" ADD CONSTRAINT "we_remember_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "we_remember_images" ADD CONSTRAINT "we_remember_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."we_remember"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "we_remember_images_locales" ADD CONSTRAINT "we_remember_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."we_remember_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "we_remember_external_links" ADD CONSTRAINT "we_remember_external_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."we_remember"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "we_remember_locales" ADD CONSTRAINT "we_remember_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."we_remember"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "friends_images" ADD CONSTRAINT "friends_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "friends_images" ADD CONSTRAINT "friends_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."friends"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "friends_images_locales" ADD CONSTRAINT "friends_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."friends_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "friends" ADD CONSTRAINT "friends_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "friends_locales" ADD CONSTRAINT "friends_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."friends"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "authentication_requests_categories" ADD CONSTRAINT "authentication_requests_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."authentication_requests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_artworks_fk" FOREIGN KEY ("artworks_id") REFERENCES "public"."artworks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_exhibitions_fk" FOREIGN KEY ("exhibitions_id") REFERENCES "public"."exhibitions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_bibliography_fk" FOREIGN KEY ("bibliography_id") REFERENCES "public"."bibliography"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_features_fk" FOREIGN KEY ("features_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_communiques_fk" FOREIGN KEY ("communiques_id") REFERENCES "public"."communiques"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_we_remember_fk" FOREIGN KEY ("we_remember_id") REFERENCES "public"."we_remember"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_friends_fk" FOREIGN KEY ("friends_id") REFERENCES "public"."friends"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_authentication_requests_fk" FOREIGN KEY ("authentication_requests_id") REFERENCES "public"."authentication_requests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_items" ADD CONSTRAINT "navigation_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_items_locales" ADD CONSTRAINT "navigation_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_og_image_id_media_id_fk" FOREIGN KEY ("og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings_locales" ADD CONSTRAINT "settings_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings_locales" ADD CONSTRAINT "settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_artwork_reference_idx" ON "media" USING btree ("artwork_reference_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_hero_carousel_slides_order_idx" ON "pages_blocks_hero_carousel_slides" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_carousel_slides_parent_id_idx" ON "pages_blocks_hero_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_carousel_slides_image_idx" ON "pages_blocks_hero_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_hero_carousel_slides_locales_locale_parent_id_u" ON "pages_blocks_hero_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_hero_carousel_order_idx" ON "pages_blocks_hero_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_carousel_parent_id_idx" ON "pages_blocks_hero_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_carousel_path_idx" ON "pages_blocks_hero_carousel" USING btree ("_path");
  CREATE INDEX "pages_blocks_anniversary_banner_order_idx" ON "pages_blocks_anniversary_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_anniversary_banner_parent_id_idx" ON "pages_blocks_anniversary_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_anniversary_banner_path_idx" ON "pages_blocks_anniversary_banner" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_anniversary_banner_locales_locale_parent_id_uni" ON "pages_blocks_anniversary_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_image_idx" ON "pages_blocks_hero" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_hero_locales_locale_parent_id_unique" ON "pages_blocks_hero_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_rich_text_locales_locale_parent_id_unique" ON "pages_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_image_block_order_idx" ON "pages_blocks_image_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_block_parent_id_idx" ON "pages_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_block_path_idx" ON "pages_blocks_image_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_block_image_idx" ON "pages_blocks_image_block" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_image_block_locales_locale_parent_id_unique" ON "pages_blocks_image_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_two_column_order_idx" ON "pages_blocks_two_column" USING btree ("_order");
  CREATE INDEX "pages_blocks_two_column_parent_id_idx" ON "pages_blocks_two_column" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_two_column_path_idx" ON "pages_blocks_two_column" USING btree ("_path");
  CREATE INDEX "pages_blocks_two_column_image_idx" ON "pages_blocks_two_column" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_two_column_locales_locale_parent_id_unique" ON "pages_blocks_two_column_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_timeline_entries_order_idx" ON "pages_blocks_timeline_entries" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_entries_parent_id_idx" ON "pages_blocks_timeline_entries" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_entries_image_idx" ON "pages_blocks_timeline_entries" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_timeline_entries_locales_locale_parent_id_uniqu" ON "pages_blocks_timeline_entries_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_timeline_order_idx" ON "pages_blocks_timeline" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_parent_id_idx" ON "pages_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_path_idx" ON "pages_blocks_timeline" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_embed_order_idx" ON "pages_blocks_video_embed" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_embed_parent_id_idx" ON "pages_blocks_video_embed" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_embed_path_idx" ON "pages_blocks_video_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_video_embed_locales_locale_parent_id_unique" ON "pages_blocks_video_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_iframe_embed_order_idx" ON "pages_blocks_iframe_embed" USING btree ("_order");
  CREATE INDEX "pages_blocks_iframe_embed_parent_id_idx" ON "pages_blocks_iframe_embed" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_iframe_embed_path_idx" ON "pages_blocks_iframe_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_iframe_embed_locales_locale_parent_id_unique" ON "pages_blocks_iframe_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_image_grid_images_order_idx" ON "pages_blocks_image_grid_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_grid_images_parent_id_idx" ON "pages_blocks_image_grid_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_grid_images_image_idx" ON "pages_blocks_image_grid_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_image_grid_images_locales_locale_parent_id_uniq" ON "pages_blocks_image_grid_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_image_grid_order_idx" ON "pages_blocks_image_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_grid_parent_id_idx" ON "pages_blocks_image_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_grid_path_idx" ON "pages_blocks_image_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_quote_order_idx" ON "pages_blocks_quote" USING btree ("_order");
  CREATE INDEX "pages_blocks_quote_parent_id_idx" ON "pages_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quote_path_idx" ON "pages_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_quote_locales_locale_parent_id_unique" ON "pages_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_cta_locales_locale_parent_id_unique" ON "pages_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_divider_order_idx" ON "pages_blocks_divider" USING btree ("_order");
  CREATE INDEX "pages_blocks_divider_parent_id_idx" ON "pages_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_divider_path_idx" ON "pages_blocks_divider" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_carousel_slides_order_idx" ON "_pages_v_blocks_hero_carousel_slides" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_carousel_slides_parent_id_idx" ON "_pages_v_blocks_hero_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_carousel_slides_image_idx" ON "_pages_v_blocks_hero_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_hero_carousel_slides_locales_locale_parent_i" ON "_pages_v_blocks_hero_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_carousel_order_idx" ON "_pages_v_blocks_hero_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_carousel_parent_id_idx" ON "_pages_v_blocks_hero_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_carousel_path_idx" ON "_pages_v_blocks_hero_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_anniversary_banner_order_idx" ON "_pages_v_blocks_anniversary_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_anniversary_banner_parent_id_idx" ON "_pages_v_blocks_anniversary_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_anniversary_banner_path_idx" ON "_pages_v_blocks_anniversary_banner" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_anniversary_banner_locales_locale_parent_id_" ON "_pages_v_blocks_anniversary_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_image_idx" ON "_pages_v_blocks_hero" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_hero_locales_locale_parent_id_unique" ON "_pages_v_blocks_hero_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_rich_text_locales_locale_parent_id_unique" ON "_pages_v_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_image_block_order_idx" ON "_pages_v_blocks_image_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_block_parent_id_idx" ON "_pages_v_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_block_path_idx" ON "_pages_v_blocks_image_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_block_image_idx" ON "_pages_v_blocks_image_block" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_image_block_locales_locale_parent_id_unique" ON "_pages_v_blocks_image_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_two_column_order_idx" ON "_pages_v_blocks_two_column" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_two_column_parent_id_idx" ON "_pages_v_blocks_two_column" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_two_column_path_idx" ON "_pages_v_blocks_two_column" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_two_column_image_idx" ON "_pages_v_blocks_two_column" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_two_column_locales_locale_parent_id_unique" ON "_pages_v_blocks_two_column_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_entries_order_idx" ON "_pages_v_blocks_timeline_entries" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_entries_parent_id_idx" ON "_pages_v_blocks_timeline_entries" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_entries_image_idx" ON "_pages_v_blocks_timeline_entries" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_timeline_entries_locales_locale_parent_id_un" ON "_pages_v_blocks_timeline_entries_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_order_idx" ON "_pages_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_parent_id_idx" ON "_pages_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_path_idx" ON "_pages_v_blocks_timeline" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_video_embed_order_idx" ON "_pages_v_blocks_video_embed" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_embed_parent_id_idx" ON "_pages_v_blocks_video_embed" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_embed_path_idx" ON "_pages_v_blocks_video_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_video_embed_locales_locale_parent_id_unique" ON "_pages_v_blocks_video_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_iframe_embed_order_idx" ON "_pages_v_blocks_iframe_embed" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_iframe_embed_parent_id_idx" ON "_pages_v_blocks_iframe_embed" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_iframe_embed_path_idx" ON "_pages_v_blocks_iframe_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_iframe_embed_locales_locale_parent_id_unique" ON "_pages_v_blocks_iframe_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_image_grid_images_order_idx" ON "_pages_v_blocks_image_grid_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_grid_images_parent_id_idx" ON "_pages_v_blocks_image_grid_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_grid_images_image_idx" ON "_pages_v_blocks_image_grid_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_image_grid_images_locales_locale_parent_id_u" ON "_pages_v_blocks_image_grid_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_image_grid_order_idx" ON "_pages_v_blocks_image_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_grid_parent_id_idx" ON "_pages_v_blocks_image_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_grid_path_idx" ON "_pages_v_blocks_image_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_quote_order_idx" ON "_pages_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_quote_parent_id_idx" ON "_pages_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_quote_path_idx" ON "_pages_v_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_quote_locales_locale_parent_id_unique" ON "_pages_v_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_cta_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_divider_order_idx" ON "_pages_v_blocks_divider" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_divider_parent_id_idx" ON "_pages_v_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_divider_path_idx" ON "_pages_v_blocks_divider" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "artworks_images_order_idx" ON "artworks_images" USING btree ("_order");
  CREATE INDEX "artworks_images_parent_id_idx" ON "artworks_images" USING btree ("_parent_id");
  CREATE INDEX "artworks_images_image_idx" ON "artworks_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "artworks_slug_idx" ON "artworks" USING btree ("slug");
  CREATE INDEX "artworks_updated_at_idx" ON "artworks" USING btree ("updated_at");
  CREATE INDEX "artworks_created_at_idx" ON "artworks" USING btree ("created_at");
  CREATE INDEX "artworks_meta_meta_image_idx" ON "artworks_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "artworks_locales_locale_parent_id_unique" ON "artworks_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "artworks_rels_order_idx" ON "artworks_rels" USING btree ("order");
  CREATE INDEX "artworks_rels_parent_idx" ON "artworks_rels" USING btree ("parent_id");
  CREATE INDEX "artworks_rels_path_idx" ON "artworks_rels" USING btree ("path");
  CREATE INDEX "artworks_rels_exhibitions_id_idx" ON "artworks_rels" USING btree ("exhibitions_id");
  CREATE INDEX "artworks_rels_bibliography_id_idx" ON "artworks_rels" USING btree ("bibliography_id");
  CREATE INDEX "artworks_rels_artworks_id_idx" ON "artworks_rels" USING btree ("artworks_id");
  CREATE INDEX "exhibitions_images_order_idx" ON "exhibitions_images" USING btree ("_order");
  CREATE INDEX "exhibitions_images_parent_id_idx" ON "exhibitions_images" USING btree ("_parent_id");
  CREATE INDEX "exhibitions_images_image_idx" ON "exhibitions_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "exhibitions_images_locales_locale_parent_id_unique" ON "exhibitions_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "exhibitions_updated_at_idx" ON "exhibitions" USING btree ("updated_at");
  CREATE INDEX "exhibitions_created_at_idx" ON "exhibitions" USING btree ("created_at");
  CREATE UNIQUE INDEX "exhibitions_locales_locale_parent_id_unique" ON "exhibitions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "exhibitions_rels_order_idx" ON "exhibitions_rels" USING btree ("order");
  CREATE INDEX "exhibitions_rels_parent_idx" ON "exhibitions_rels" USING btree ("parent_id");
  CREATE INDEX "exhibitions_rels_path_idx" ON "exhibitions_rels" USING btree ("path");
  CREATE INDEX "exhibitions_rels_artworks_id_idx" ON "exhibitions_rels" USING btree ("artworks_id");
  CREATE INDEX "bibliography_authors_order_idx" ON "bibliography_authors" USING btree ("_order");
  CREATE INDEX "bibliography_authors_parent_id_idx" ON "bibliography_authors" USING btree ("_parent_id");
  CREATE INDEX "bibliography_updated_at_idx" ON "bibliography" USING btree ("updated_at");
  CREATE INDEX "bibliography_created_at_idx" ON "bibliography" USING btree ("created_at");
  CREATE UNIQUE INDEX "bibliography_locales_locale_parent_id_unique" ON "bibliography_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_blocks_rich_text_order_idx" ON "features_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "features_blocks_rich_text_parent_id_idx" ON "features_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "features_blocks_rich_text_path_idx" ON "features_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "features_blocks_rich_text_locales_locale_parent_id_unique" ON "features_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_blocks_image_block_order_idx" ON "features_blocks_image_block" USING btree ("_order");
  CREATE INDEX "features_blocks_image_block_parent_id_idx" ON "features_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "features_blocks_image_block_path_idx" ON "features_blocks_image_block" USING btree ("_path");
  CREATE INDEX "features_blocks_image_block_image_idx" ON "features_blocks_image_block" USING btree ("image_id");
  CREATE UNIQUE INDEX "features_blocks_image_block_locales_locale_parent_id_unique" ON "features_blocks_image_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_blocks_two_column_order_idx" ON "features_blocks_two_column" USING btree ("_order");
  CREATE INDEX "features_blocks_two_column_parent_id_idx" ON "features_blocks_two_column" USING btree ("_parent_id");
  CREATE INDEX "features_blocks_two_column_path_idx" ON "features_blocks_two_column" USING btree ("_path");
  CREATE INDEX "features_blocks_two_column_image_idx" ON "features_blocks_two_column" USING btree ("image_id");
  CREATE UNIQUE INDEX "features_blocks_two_column_locales_locale_parent_id_unique" ON "features_blocks_two_column_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_blocks_video_embed_order_idx" ON "features_blocks_video_embed" USING btree ("_order");
  CREATE INDEX "features_blocks_video_embed_parent_id_idx" ON "features_blocks_video_embed" USING btree ("_parent_id");
  CREATE INDEX "features_blocks_video_embed_path_idx" ON "features_blocks_video_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "features_blocks_video_embed_locales_locale_parent_id_unique" ON "features_blocks_video_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_blocks_image_grid_images_order_idx" ON "features_blocks_image_grid_images" USING btree ("_order");
  CREATE INDEX "features_blocks_image_grid_images_parent_id_idx" ON "features_blocks_image_grid_images" USING btree ("_parent_id");
  CREATE INDEX "features_blocks_image_grid_images_image_idx" ON "features_blocks_image_grid_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "features_blocks_image_grid_images_locales_locale_parent_id_u" ON "features_blocks_image_grid_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_blocks_image_grid_order_idx" ON "features_blocks_image_grid" USING btree ("_order");
  CREATE INDEX "features_blocks_image_grid_parent_id_idx" ON "features_blocks_image_grid" USING btree ("_parent_id");
  CREATE INDEX "features_blocks_image_grid_path_idx" ON "features_blocks_image_grid" USING btree ("_path");
  CREATE INDEX "features_blocks_quote_order_idx" ON "features_blocks_quote" USING btree ("_order");
  CREATE INDEX "features_blocks_quote_parent_id_idx" ON "features_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "features_blocks_quote_path_idx" ON "features_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "features_blocks_quote_locales_locale_parent_id_unique" ON "features_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_blocks_divider_order_idx" ON "features_blocks_divider" USING btree ("_order");
  CREATE INDEX "features_blocks_divider_parent_id_idx" ON "features_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "features_blocks_divider_path_idx" ON "features_blocks_divider" USING btree ("_path");
  CREATE INDEX "features_tags_order_idx" ON "features_tags" USING btree ("_order");
  CREATE INDEX "features_tags_parent_id_idx" ON "features_tags" USING btree ("_parent_id");
  CREATE INDEX "features_hero_image_idx" ON "features" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "features_slug_idx" ON "features" USING btree ("slug");
  CREATE INDEX "features_updated_at_idx" ON "features" USING btree ("updated_at");
  CREATE INDEX "features_created_at_idx" ON "features" USING btree ("created_at");
  CREATE INDEX "features__status_idx" ON "features" USING btree ("_status");
  CREATE INDEX "features_meta_meta_image_idx" ON "features_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "features_locales_locale_parent_id_unique" ON "features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "features_rels_order_idx" ON "features_rels" USING btree ("order");
  CREATE INDEX "features_rels_parent_idx" ON "features_rels" USING btree ("parent_id");
  CREATE INDEX "features_rels_path_idx" ON "features_rels" USING btree ("path");
  CREATE INDEX "features_rels_artworks_id_idx" ON "features_rels" USING btree ("artworks_id");
  CREATE INDEX "_features_v_blocks_rich_text_order_idx" ON "_features_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_features_v_blocks_rich_text_parent_id_idx" ON "_features_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_features_v_blocks_rich_text_path_idx" ON "_features_v_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_features_v_blocks_rich_text_locales_locale_parent_id_unique" ON "_features_v_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_blocks_image_block_order_idx" ON "_features_v_blocks_image_block" USING btree ("_order");
  CREATE INDEX "_features_v_blocks_image_block_parent_id_idx" ON "_features_v_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "_features_v_blocks_image_block_path_idx" ON "_features_v_blocks_image_block" USING btree ("_path");
  CREATE INDEX "_features_v_blocks_image_block_image_idx" ON "_features_v_blocks_image_block" USING btree ("image_id");
  CREATE UNIQUE INDEX "_features_v_blocks_image_block_locales_locale_parent_id_uniq" ON "_features_v_blocks_image_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_blocks_two_column_order_idx" ON "_features_v_blocks_two_column" USING btree ("_order");
  CREATE INDEX "_features_v_blocks_two_column_parent_id_idx" ON "_features_v_blocks_two_column" USING btree ("_parent_id");
  CREATE INDEX "_features_v_blocks_two_column_path_idx" ON "_features_v_blocks_two_column" USING btree ("_path");
  CREATE INDEX "_features_v_blocks_two_column_image_idx" ON "_features_v_blocks_two_column" USING btree ("image_id");
  CREATE UNIQUE INDEX "_features_v_blocks_two_column_locales_locale_parent_id_uniqu" ON "_features_v_blocks_two_column_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_blocks_video_embed_order_idx" ON "_features_v_blocks_video_embed" USING btree ("_order");
  CREATE INDEX "_features_v_blocks_video_embed_parent_id_idx" ON "_features_v_blocks_video_embed" USING btree ("_parent_id");
  CREATE INDEX "_features_v_blocks_video_embed_path_idx" ON "_features_v_blocks_video_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "_features_v_blocks_video_embed_locales_locale_parent_id_uniq" ON "_features_v_blocks_video_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_blocks_image_grid_images_order_idx" ON "_features_v_blocks_image_grid_images" USING btree ("_order");
  CREATE INDEX "_features_v_blocks_image_grid_images_parent_id_idx" ON "_features_v_blocks_image_grid_images" USING btree ("_parent_id");
  CREATE INDEX "_features_v_blocks_image_grid_images_image_idx" ON "_features_v_blocks_image_grid_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "_features_v_blocks_image_grid_images_locales_locale_parent_i" ON "_features_v_blocks_image_grid_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_blocks_image_grid_order_idx" ON "_features_v_blocks_image_grid" USING btree ("_order");
  CREATE INDEX "_features_v_blocks_image_grid_parent_id_idx" ON "_features_v_blocks_image_grid" USING btree ("_parent_id");
  CREATE INDEX "_features_v_blocks_image_grid_path_idx" ON "_features_v_blocks_image_grid" USING btree ("_path");
  CREATE INDEX "_features_v_blocks_quote_order_idx" ON "_features_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_features_v_blocks_quote_parent_id_idx" ON "_features_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_features_v_blocks_quote_path_idx" ON "_features_v_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "_features_v_blocks_quote_locales_locale_parent_id_unique" ON "_features_v_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_blocks_divider_order_idx" ON "_features_v_blocks_divider" USING btree ("_order");
  CREATE INDEX "_features_v_blocks_divider_parent_id_idx" ON "_features_v_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "_features_v_blocks_divider_path_idx" ON "_features_v_blocks_divider" USING btree ("_path");
  CREATE INDEX "_features_v_version_tags_order_idx" ON "_features_v_version_tags" USING btree ("_order");
  CREATE INDEX "_features_v_version_tags_parent_id_idx" ON "_features_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_features_v_parent_idx" ON "_features_v" USING btree ("parent_id");
  CREATE INDEX "_features_v_version_version_hero_image_idx" ON "_features_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_features_v_version_version_slug_idx" ON "_features_v" USING btree ("version_slug");
  CREATE INDEX "_features_v_version_version_updated_at_idx" ON "_features_v" USING btree ("version_updated_at");
  CREATE INDEX "_features_v_version_version_created_at_idx" ON "_features_v" USING btree ("version_created_at");
  CREATE INDEX "_features_v_version_version__status_idx" ON "_features_v" USING btree ("version__status");
  CREATE INDEX "_features_v_created_at_idx" ON "_features_v" USING btree ("created_at");
  CREATE INDEX "_features_v_updated_at_idx" ON "_features_v" USING btree ("updated_at");
  CREATE INDEX "_features_v_snapshot_idx" ON "_features_v" USING btree ("snapshot");
  CREATE INDEX "_features_v_published_locale_idx" ON "_features_v" USING btree ("published_locale");
  CREATE INDEX "_features_v_latest_idx" ON "_features_v" USING btree ("latest");
  CREATE INDEX "_features_v_version_meta_version_meta_image_idx" ON "_features_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_features_v_locales_locale_parent_id_unique" ON "_features_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_features_v_rels_order_idx" ON "_features_v_rels" USING btree ("order");
  CREATE INDEX "_features_v_rels_parent_idx" ON "_features_v_rels" USING btree ("parent_id");
  CREATE INDEX "_features_v_rels_path_idx" ON "_features_v_rels" USING btree ("path");
  CREATE INDEX "_features_v_rels_artworks_id_idx" ON "_features_v_rels" USING btree ("artworks_id");
  CREATE INDEX "communiques_blocks_rich_text_order_idx" ON "communiques_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "communiques_blocks_rich_text_parent_id_idx" ON "communiques_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "communiques_blocks_rich_text_path_idx" ON "communiques_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "communiques_blocks_rich_text_locales_locale_parent_id_unique" ON "communiques_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "communiques_blocks_image_block_order_idx" ON "communiques_blocks_image_block" USING btree ("_order");
  CREATE INDEX "communiques_blocks_image_block_parent_id_idx" ON "communiques_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "communiques_blocks_image_block_path_idx" ON "communiques_blocks_image_block" USING btree ("_path");
  CREATE INDEX "communiques_blocks_image_block_image_idx" ON "communiques_blocks_image_block" USING btree ("image_id");
  CREATE UNIQUE INDEX "communiques_blocks_image_block_locales_locale_parent_id_uniq" ON "communiques_blocks_image_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "communiques_blocks_video_embed_order_idx" ON "communiques_blocks_video_embed" USING btree ("_order");
  CREATE INDEX "communiques_blocks_video_embed_parent_id_idx" ON "communiques_blocks_video_embed" USING btree ("_parent_id");
  CREATE INDEX "communiques_blocks_video_embed_path_idx" ON "communiques_blocks_video_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "communiques_blocks_video_embed_locales_locale_parent_id_uniq" ON "communiques_blocks_video_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "communiques_blocks_divider_order_idx" ON "communiques_blocks_divider" USING btree ("_order");
  CREATE INDEX "communiques_blocks_divider_parent_id_idx" ON "communiques_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "communiques_blocks_divider_path_idx" ON "communiques_blocks_divider" USING btree ("_path");
  CREATE INDEX "communiques_images_order_idx" ON "communiques_images" USING btree ("_order");
  CREATE INDEX "communiques_images_parent_id_idx" ON "communiques_images" USING btree ("_parent_id");
  CREATE INDEX "communiques_images_image_idx" ON "communiques_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "communiques_images_locales_locale_parent_id_unique" ON "communiques_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "communiques_external_links_order_idx" ON "communiques_external_links" USING btree ("_order");
  CREATE INDEX "communiques_external_links_parent_id_idx" ON "communiques_external_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "communiques_external_links_locales_locale_parent_id_unique" ON "communiques_external_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "communiques_attachments_order_idx" ON "communiques_attachments" USING btree ("_order");
  CREATE INDEX "communiques_attachments_parent_id_idx" ON "communiques_attachments" USING btree ("_parent_id");
  CREATE INDEX "communiques_attachments_file_idx" ON "communiques_attachments" USING btree ("file_id");
  CREATE UNIQUE INDEX "communiques_attachments_locales_locale_parent_id_unique" ON "communiques_attachments_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "communiques_slug_idx" ON "communiques" USING btree ("slug");
  CREATE INDEX "communiques_updated_at_idx" ON "communiques" USING btree ("updated_at");
  CREATE INDEX "communiques_created_at_idx" ON "communiques" USING btree ("created_at");
  CREATE INDEX "communiques__status_idx" ON "communiques" USING btree ("_status");
  CREATE INDEX "communiques_meta_meta_image_idx" ON "communiques_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "communiques_locales_locale_parent_id_unique" ON "communiques_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_communiques_v_blocks_rich_text_order_idx" ON "_communiques_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_communiques_v_blocks_rich_text_parent_id_idx" ON "_communiques_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_communiques_v_blocks_rich_text_path_idx" ON "_communiques_v_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_communiques_v_blocks_rich_text_locales_locale_parent_id_uni" ON "_communiques_v_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_communiques_v_blocks_image_block_order_idx" ON "_communiques_v_blocks_image_block" USING btree ("_order");
  CREATE INDEX "_communiques_v_blocks_image_block_parent_id_idx" ON "_communiques_v_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "_communiques_v_blocks_image_block_path_idx" ON "_communiques_v_blocks_image_block" USING btree ("_path");
  CREATE INDEX "_communiques_v_blocks_image_block_image_idx" ON "_communiques_v_blocks_image_block" USING btree ("image_id");
  CREATE UNIQUE INDEX "_communiques_v_blocks_image_block_locales_locale_parent_id_u" ON "_communiques_v_blocks_image_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_communiques_v_blocks_video_embed_order_idx" ON "_communiques_v_blocks_video_embed" USING btree ("_order");
  CREATE INDEX "_communiques_v_blocks_video_embed_parent_id_idx" ON "_communiques_v_blocks_video_embed" USING btree ("_parent_id");
  CREATE INDEX "_communiques_v_blocks_video_embed_path_idx" ON "_communiques_v_blocks_video_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "_communiques_v_blocks_video_embed_locales_locale_parent_id_u" ON "_communiques_v_blocks_video_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_communiques_v_blocks_divider_order_idx" ON "_communiques_v_blocks_divider" USING btree ("_order");
  CREATE INDEX "_communiques_v_blocks_divider_parent_id_idx" ON "_communiques_v_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "_communiques_v_blocks_divider_path_idx" ON "_communiques_v_blocks_divider" USING btree ("_path");
  CREATE INDEX "_communiques_v_version_images_order_idx" ON "_communiques_v_version_images" USING btree ("_order");
  CREATE INDEX "_communiques_v_version_images_parent_id_idx" ON "_communiques_v_version_images" USING btree ("_parent_id");
  CREATE INDEX "_communiques_v_version_images_image_idx" ON "_communiques_v_version_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "_communiques_v_version_images_locales_locale_parent_id_uniqu" ON "_communiques_v_version_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_communiques_v_version_external_links_order_idx" ON "_communiques_v_version_external_links" USING btree ("_order");
  CREATE INDEX "_communiques_v_version_external_links_parent_id_idx" ON "_communiques_v_version_external_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_communiques_v_version_external_links_locales_locale_parent_" ON "_communiques_v_version_external_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_communiques_v_version_attachments_order_idx" ON "_communiques_v_version_attachments" USING btree ("_order");
  CREATE INDEX "_communiques_v_version_attachments_parent_id_idx" ON "_communiques_v_version_attachments" USING btree ("_parent_id");
  CREATE INDEX "_communiques_v_version_attachments_file_idx" ON "_communiques_v_version_attachments" USING btree ("file_id");
  CREATE UNIQUE INDEX "_communiques_v_version_attachments_locales_locale_parent_id_" ON "_communiques_v_version_attachments_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_communiques_v_parent_idx" ON "_communiques_v" USING btree ("parent_id");
  CREATE INDEX "_communiques_v_version_version_slug_idx" ON "_communiques_v" USING btree ("version_slug");
  CREATE INDEX "_communiques_v_version_version_updated_at_idx" ON "_communiques_v" USING btree ("version_updated_at");
  CREATE INDEX "_communiques_v_version_version_created_at_idx" ON "_communiques_v" USING btree ("version_created_at");
  CREATE INDEX "_communiques_v_version_version__status_idx" ON "_communiques_v" USING btree ("version__status");
  CREATE INDEX "_communiques_v_created_at_idx" ON "_communiques_v" USING btree ("created_at");
  CREATE INDEX "_communiques_v_updated_at_idx" ON "_communiques_v" USING btree ("updated_at");
  CREATE INDEX "_communiques_v_snapshot_idx" ON "_communiques_v" USING btree ("snapshot");
  CREATE INDEX "_communiques_v_published_locale_idx" ON "_communiques_v" USING btree ("published_locale");
  CREATE INDEX "_communiques_v_latest_idx" ON "_communiques_v" USING btree ("latest");
  CREATE INDEX "_communiques_v_version_meta_version_meta_image_idx" ON "_communiques_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_communiques_v_locales_locale_parent_id_unique" ON "_communiques_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "people_blocks_rich_text_order_idx" ON "people_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "people_blocks_rich_text_parent_id_idx" ON "people_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_rich_text_path_idx" ON "people_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "people_blocks_rich_text_locales_locale_parent_id_unique" ON "people_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "people_blocks_image_block_order_idx" ON "people_blocks_image_block" USING btree ("_order");
  CREATE INDEX "people_blocks_image_block_parent_id_idx" ON "people_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_image_block_path_idx" ON "people_blocks_image_block" USING btree ("_path");
  CREATE INDEX "people_blocks_image_block_image_idx" ON "people_blocks_image_block" USING btree ("image_id");
  CREATE UNIQUE INDEX "people_blocks_image_block_locales_locale_parent_id_unique" ON "people_blocks_image_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "people_blocks_two_column_order_idx" ON "people_blocks_two_column" USING btree ("_order");
  CREATE INDEX "people_blocks_two_column_parent_id_idx" ON "people_blocks_two_column" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_two_column_path_idx" ON "people_blocks_two_column" USING btree ("_path");
  CREATE INDEX "people_blocks_two_column_image_idx" ON "people_blocks_two_column" USING btree ("image_id");
  CREATE UNIQUE INDEX "people_blocks_two_column_locales_locale_parent_id_unique" ON "people_blocks_two_column_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "people_blocks_timeline_entries_order_idx" ON "people_blocks_timeline_entries" USING btree ("_order");
  CREATE INDEX "people_blocks_timeline_entries_parent_id_idx" ON "people_blocks_timeline_entries" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_timeline_entries_image_idx" ON "people_blocks_timeline_entries" USING btree ("image_id");
  CREATE UNIQUE INDEX "people_blocks_timeline_entries_locales_locale_parent_id_uniq" ON "people_blocks_timeline_entries_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "people_blocks_timeline_order_idx" ON "people_blocks_timeline" USING btree ("_order");
  CREATE INDEX "people_blocks_timeline_parent_id_idx" ON "people_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_timeline_path_idx" ON "people_blocks_timeline" USING btree ("_path");
  CREATE INDEX "people_blocks_video_embed_order_idx" ON "people_blocks_video_embed" USING btree ("_order");
  CREATE INDEX "people_blocks_video_embed_parent_id_idx" ON "people_blocks_video_embed" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_video_embed_path_idx" ON "people_blocks_video_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "people_blocks_video_embed_locales_locale_parent_id_unique" ON "people_blocks_video_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "people_blocks_iframe_embed_order_idx" ON "people_blocks_iframe_embed" USING btree ("_order");
  CREATE INDEX "people_blocks_iframe_embed_parent_id_idx" ON "people_blocks_iframe_embed" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_iframe_embed_path_idx" ON "people_blocks_iframe_embed" USING btree ("_path");
  CREATE UNIQUE INDEX "people_blocks_iframe_embed_locales_locale_parent_id_unique" ON "people_blocks_iframe_embed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "people_blocks_quote_order_idx" ON "people_blocks_quote" USING btree ("_order");
  CREATE INDEX "people_blocks_quote_parent_id_idx" ON "people_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_quote_path_idx" ON "people_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "people_blocks_quote_locales_locale_parent_id_unique" ON "people_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "people_blocks_divider_order_idx" ON "people_blocks_divider" USING btree ("_order");
  CREATE INDEX "people_blocks_divider_parent_id_idx" ON "people_blocks_divider" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_divider_path_idx" ON "people_blocks_divider" USING btree ("_path");
  CREATE UNIQUE INDEX "people_slug_idx" ON "people" USING btree ("slug");
  CREATE INDEX "people_portrait_idx" ON "people" USING btree ("portrait_id");
  CREATE INDEX "people_updated_at_idx" ON "people" USING btree ("updated_at");
  CREATE INDEX "people_created_at_idx" ON "people" USING btree ("created_at");
  CREATE INDEX "people_meta_meta_image_idx" ON "people_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "people_locales_locale_parent_id_unique" ON "people_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "we_remember_images_order_idx" ON "we_remember_images" USING btree ("_order");
  CREATE INDEX "we_remember_images_parent_id_idx" ON "we_remember_images" USING btree ("_parent_id");
  CREATE INDEX "we_remember_images_image_idx" ON "we_remember_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "we_remember_images_locales_locale_parent_id_unique" ON "we_remember_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "we_remember_external_links_order_idx" ON "we_remember_external_links" USING btree ("_order");
  CREATE INDEX "we_remember_external_links_parent_id_idx" ON "we_remember_external_links" USING btree ("_parent_id");
  CREATE INDEX "we_remember_updated_at_idx" ON "we_remember" USING btree ("updated_at");
  CREATE INDEX "we_remember_created_at_idx" ON "we_remember" USING btree ("created_at");
  CREATE UNIQUE INDEX "we_remember_locales_locale_parent_id_unique" ON "we_remember_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "friends_images_order_idx" ON "friends_images" USING btree ("_order");
  CREATE INDEX "friends_images_parent_id_idx" ON "friends_images" USING btree ("_parent_id");
  CREATE INDEX "friends_images_image_idx" ON "friends_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "friends_images_locales_locale_parent_id_unique" ON "friends_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "friends_logo_idx" ON "friends" USING btree ("logo_id");
  CREATE INDEX "friends_updated_at_idx" ON "friends" USING btree ("updated_at");
  CREATE INDEX "friends_created_at_idx" ON "friends" USING btree ("created_at");
  CREATE UNIQUE INDEX "friends_locales_locale_parent_id_unique" ON "friends_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "authentication_requests_categories_order_idx" ON "authentication_requests_categories" USING btree ("order");
  CREATE INDEX "authentication_requests_categories_parent_idx" ON "authentication_requests_categories" USING btree ("parent_id");
  CREATE INDEX "authentication_requests_updated_at_idx" ON "authentication_requests" USING btree ("updated_at");
  CREATE INDEX "authentication_requests_created_at_idx" ON "authentication_requests" USING btree ("created_at");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_artworks_id_idx" ON "payload_locked_documents_rels" USING btree ("artworks_id");
  CREATE INDEX "payload_locked_documents_rels_exhibitions_id_idx" ON "payload_locked_documents_rels" USING btree ("exhibitions_id");
  CREATE INDEX "payload_locked_documents_rels_bibliography_id_idx" ON "payload_locked_documents_rels" USING btree ("bibliography_id");
  CREATE INDEX "payload_locked_documents_rels_features_id_idx" ON "payload_locked_documents_rels" USING btree ("features_id");
  CREATE INDEX "payload_locked_documents_rels_communiques_id_idx" ON "payload_locked_documents_rels" USING btree ("communiques_id");
  CREATE INDEX "payload_locked_documents_rels_people_id_idx" ON "payload_locked_documents_rels" USING btree ("people_id");
  CREATE INDEX "payload_locked_documents_rels_we_remember_id_idx" ON "payload_locked_documents_rels" USING btree ("we_remember_id");
  CREATE INDEX "payload_locked_documents_rels_friends_id_idx" ON "payload_locked_documents_rels" USING btree ("friends_id");
  CREATE INDEX "payload_locked_documents_rels_authentication_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("authentication_requests_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "navigation_items_order_idx" ON "navigation_items" USING btree ("_order");
  CREATE INDEX "navigation_items_parent_id_idx" ON "navigation_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "navigation_items_locales_locale_parent_id_unique" ON "navigation_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "settings_og_image_idx" ON "settings" USING btree ("og_image_id");
  CREATE INDEX "settings_meta_meta_image_idx" ON "settings_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "settings_locales_locale_parent_id_unique" ON "settings_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "pages_blocks_hero_carousel_slides" CASCADE;
  DROP TABLE "pages_blocks_hero_carousel_slides_locales" CASCADE;
  DROP TABLE "pages_blocks_hero_carousel" CASCADE;
  DROP TABLE "pages_blocks_anniversary_banner" CASCADE;
  DROP TABLE "pages_blocks_anniversary_banner_locales" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_hero_locales" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_rich_text_locales" CASCADE;
  DROP TABLE "pages_blocks_image_block" CASCADE;
  DROP TABLE "pages_blocks_image_block_locales" CASCADE;
  DROP TABLE "pages_blocks_two_column" CASCADE;
  DROP TABLE "pages_blocks_two_column_locales" CASCADE;
  DROP TABLE "pages_blocks_timeline_entries" CASCADE;
  DROP TABLE "pages_blocks_timeline_entries_locales" CASCADE;
  DROP TABLE "pages_blocks_timeline" CASCADE;
  DROP TABLE "pages_blocks_video_embed" CASCADE;
  DROP TABLE "pages_blocks_video_embed_locales" CASCADE;
  DROP TABLE "pages_blocks_iframe_embed" CASCADE;
  DROP TABLE "pages_blocks_iframe_embed_locales" CASCADE;
  DROP TABLE "pages_blocks_image_grid_images" CASCADE;
  DROP TABLE "pages_blocks_image_grid_images_locales" CASCADE;
  DROP TABLE "pages_blocks_image_grid" CASCADE;
  DROP TABLE "pages_blocks_quote" CASCADE;
  DROP TABLE "pages_blocks_quote_locales" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_cta_locales" CASCADE;
  DROP TABLE "pages_blocks_divider" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_carousel_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_carousel_slides_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_anniversary_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_anniversary_banner_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_image_block" CASCADE;
  DROP TABLE "_pages_v_blocks_image_block_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_two_column" CASCADE;
  DROP TABLE "_pages_v_blocks_two_column_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_entries" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_entries_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline" CASCADE;
  DROP TABLE "_pages_v_blocks_video_embed" CASCADE;
  DROP TABLE "_pages_v_blocks_video_embed_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_iframe_embed" CASCADE;
  DROP TABLE "_pages_v_blocks_iframe_embed_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_image_grid_images" CASCADE;
  DROP TABLE "_pages_v_blocks_image_grid_images_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_image_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_quote" CASCADE;
  DROP TABLE "_pages_v_blocks_quote_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_divider" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "artworks_images" CASCADE;
  DROP TABLE "artworks" CASCADE;
  DROP TABLE "artworks_locales" CASCADE;
  DROP TABLE "artworks_rels" CASCADE;
  DROP TABLE "exhibitions_images" CASCADE;
  DROP TABLE "exhibitions_images_locales" CASCADE;
  DROP TABLE "exhibitions" CASCADE;
  DROP TABLE "exhibitions_locales" CASCADE;
  DROP TABLE "exhibitions_rels" CASCADE;
  DROP TABLE "bibliography_authors" CASCADE;
  DROP TABLE "bibliography" CASCADE;
  DROP TABLE "bibliography_locales" CASCADE;
  DROP TABLE "features_blocks_rich_text" CASCADE;
  DROP TABLE "features_blocks_rich_text_locales" CASCADE;
  DROP TABLE "features_blocks_image_block" CASCADE;
  DROP TABLE "features_blocks_image_block_locales" CASCADE;
  DROP TABLE "features_blocks_two_column" CASCADE;
  DROP TABLE "features_blocks_two_column_locales" CASCADE;
  DROP TABLE "features_blocks_video_embed" CASCADE;
  DROP TABLE "features_blocks_video_embed_locales" CASCADE;
  DROP TABLE "features_blocks_image_grid_images" CASCADE;
  DROP TABLE "features_blocks_image_grid_images_locales" CASCADE;
  DROP TABLE "features_blocks_image_grid" CASCADE;
  DROP TABLE "features_blocks_quote" CASCADE;
  DROP TABLE "features_blocks_quote_locales" CASCADE;
  DROP TABLE "features_blocks_divider" CASCADE;
  DROP TABLE "features_tags" CASCADE;
  DROP TABLE "features" CASCADE;
  DROP TABLE "features_locales" CASCADE;
  DROP TABLE "features_rels" CASCADE;
  DROP TABLE "_features_v_blocks_rich_text" CASCADE;
  DROP TABLE "_features_v_blocks_rich_text_locales" CASCADE;
  DROP TABLE "_features_v_blocks_image_block" CASCADE;
  DROP TABLE "_features_v_blocks_image_block_locales" CASCADE;
  DROP TABLE "_features_v_blocks_two_column" CASCADE;
  DROP TABLE "_features_v_blocks_two_column_locales" CASCADE;
  DROP TABLE "_features_v_blocks_video_embed" CASCADE;
  DROP TABLE "_features_v_blocks_video_embed_locales" CASCADE;
  DROP TABLE "_features_v_blocks_image_grid_images" CASCADE;
  DROP TABLE "_features_v_blocks_image_grid_images_locales" CASCADE;
  DROP TABLE "_features_v_blocks_image_grid" CASCADE;
  DROP TABLE "_features_v_blocks_quote" CASCADE;
  DROP TABLE "_features_v_blocks_quote_locales" CASCADE;
  DROP TABLE "_features_v_blocks_divider" CASCADE;
  DROP TABLE "_features_v_version_tags" CASCADE;
  DROP TABLE "_features_v" CASCADE;
  DROP TABLE "_features_v_locales" CASCADE;
  DROP TABLE "_features_v_rels" CASCADE;
  DROP TABLE "communiques_blocks_rich_text" CASCADE;
  DROP TABLE "communiques_blocks_rich_text_locales" CASCADE;
  DROP TABLE "communiques_blocks_image_block" CASCADE;
  DROP TABLE "communiques_blocks_image_block_locales" CASCADE;
  DROP TABLE "communiques_blocks_video_embed" CASCADE;
  DROP TABLE "communiques_blocks_video_embed_locales" CASCADE;
  DROP TABLE "communiques_blocks_divider" CASCADE;
  DROP TABLE "communiques_images" CASCADE;
  DROP TABLE "communiques_images_locales" CASCADE;
  DROP TABLE "communiques_external_links" CASCADE;
  DROP TABLE "communiques_external_links_locales" CASCADE;
  DROP TABLE "communiques_attachments" CASCADE;
  DROP TABLE "communiques_attachments_locales" CASCADE;
  DROP TABLE "communiques" CASCADE;
  DROP TABLE "communiques_locales" CASCADE;
  DROP TABLE "_communiques_v_blocks_rich_text" CASCADE;
  DROP TABLE "_communiques_v_blocks_rich_text_locales" CASCADE;
  DROP TABLE "_communiques_v_blocks_image_block" CASCADE;
  DROP TABLE "_communiques_v_blocks_image_block_locales" CASCADE;
  DROP TABLE "_communiques_v_blocks_video_embed" CASCADE;
  DROP TABLE "_communiques_v_blocks_video_embed_locales" CASCADE;
  DROP TABLE "_communiques_v_blocks_divider" CASCADE;
  DROP TABLE "_communiques_v_version_images" CASCADE;
  DROP TABLE "_communiques_v_version_images_locales" CASCADE;
  DROP TABLE "_communiques_v_version_external_links" CASCADE;
  DROP TABLE "_communiques_v_version_external_links_locales" CASCADE;
  DROP TABLE "_communiques_v_version_attachments" CASCADE;
  DROP TABLE "_communiques_v_version_attachments_locales" CASCADE;
  DROP TABLE "_communiques_v" CASCADE;
  DROP TABLE "_communiques_v_locales" CASCADE;
  DROP TABLE "people_blocks_rich_text" CASCADE;
  DROP TABLE "people_blocks_rich_text_locales" CASCADE;
  DROP TABLE "people_blocks_image_block" CASCADE;
  DROP TABLE "people_blocks_image_block_locales" CASCADE;
  DROP TABLE "people_blocks_two_column" CASCADE;
  DROP TABLE "people_blocks_two_column_locales" CASCADE;
  DROP TABLE "people_blocks_timeline_entries" CASCADE;
  DROP TABLE "people_blocks_timeline_entries_locales" CASCADE;
  DROP TABLE "people_blocks_timeline" CASCADE;
  DROP TABLE "people_blocks_video_embed" CASCADE;
  DROP TABLE "people_blocks_video_embed_locales" CASCADE;
  DROP TABLE "people_blocks_iframe_embed" CASCADE;
  DROP TABLE "people_blocks_iframe_embed_locales" CASCADE;
  DROP TABLE "people_blocks_quote" CASCADE;
  DROP TABLE "people_blocks_quote_locales" CASCADE;
  DROP TABLE "people_blocks_divider" CASCADE;
  DROP TABLE "people" CASCADE;
  DROP TABLE "people_locales" CASCADE;
  DROP TABLE "we_remember_images" CASCADE;
  DROP TABLE "we_remember_images_locales" CASCADE;
  DROP TABLE "we_remember_external_links" CASCADE;
  DROP TABLE "we_remember" CASCADE;
  DROP TABLE "we_remember_locales" CASCADE;
  DROP TABLE "friends_images" CASCADE;
  DROP TABLE "friends_images_locales" CASCADE;
  DROP TABLE "friends" CASCADE;
  DROP TABLE "friends_locales" CASCADE;
  DROP TABLE "authentication_requests_categories" CASCADE;
  DROP TABLE "authentication_requests" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "navigation_items" CASCADE;
  DROP TABLE "navigation_items_locales" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TABLE "settings_locales" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_media_rights";
  DROP TYPE "public"."enum_pages_blocks_rich_text_max_width";
  DROP TYPE "public"."enum_pages_blocks_image_block_size";
  DROP TYPE "public"."enum_pages_blocks_two_column_layout";
  DROP TYPE "public"."enum_pages_blocks_video_embed_platform";
  DROP TYPE "public"."enum_pages_blocks_image_grid_columns";
  DROP TYPE "public"."enum_pages_blocks_quote_size";
  DROP TYPE "public"."enum_pages_blocks_cta_style";
  DROP TYPE "public"."enum_pages_blocks_cta_align";
  DROP TYPE "public"."enum_pages_blocks_divider_spacing";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_max_width";
  DROP TYPE "public"."enum__pages_v_blocks_image_block_size";
  DROP TYPE "public"."enum__pages_v_blocks_two_column_layout";
  DROP TYPE "public"."enum__pages_v_blocks_video_embed_platform";
  DROP TYPE "public"."enum__pages_v_blocks_image_grid_columns";
  DROP TYPE "public"."enum__pages_v_blocks_quote_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta_style";
  DROP TYPE "public"."enum__pages_v_blocks_cta_align";
  DROP TYPE "public"."enum__pages_v_blocks_divider_spacing";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_artworks_category";
  DROP TYPE "public"."enum_exhibitions_type";
  DROP TYPE "public"."enum_bibliography_type";
  DROP TYPE "public"."enum_features_blocks_rich_text_max_width";
  DROP TYPE "public"."enum_features_blocks_image_block_size";
  DROP TYPE "public"."enum_features_blocks_two_column_layout";
  DROP TYPE "public"."enum_features_blocks_video_embed_platform";
  DROP TYPE "public"."enum_features_blocks_image_grid_columns";
  DROP TYPE "public"."enum_features_blocks_quote_size";
  DROP TYPE "public"."enum_features_blocks_divider_spacing";
  DROP TYPE "public"."enum_features_status";
  DROP TYPE "public"."enum__features_v_blocks_rich_text_max_width";
  DROP TYPE "public"."enum__features_v_blocks_image_block_size";
  DROP TYPE "public"."enum__features_v_blocks_two_column_layout";
  DROP TYPE "public"."enum__features_v_blocks_video_embed_platform";
  DROP TYPE "public"."enum__features_v_blocks_image_grid_columns";
  DROP TYPE "public"."enum__features_v_blocks_quote_size";
  DROP TYPE "public"."enum__features_v_blocks_divider_spacing";
  DROP TYPE "public"."enum__features_v_version_status";
  DROP TYPE "public"."enum__features_v_published_locale";
  DROP TYPE "public"."enum_communiques_blocks_rich_text_max_width";
  DROP TYPE "public"."enum_communiques_blocks_image_block_size";
  DROP TYPE "public"."enum_communiques_blocks_video_embed_platform";
  DROP TYPE "public"."enum_communiques_blocks_divider_spacing";
  DROP TYPE "public"."enum_communiques_category";
  DROP TYPE "public"."enum_communiques_status";
  DROP TYPE "public"."enum__communiques_v_blocks_rich_text_max_width";
  DROP TYPE "public"."enum__communiques_v_blocks_image_block_size";
  DROP TYPE "public"."enum__communiques_v_blocks_video_embed_platform";
  DROP TYPE "public"."enum__communiques_v_blocks_divider_spacing";
  DROP TYPE "public"."enum__communiques_v_version_category";
  DROP TYPE "public"."enum__communiques_v_version_status";
  DROP TYPE "public"."enum__communiques_v_published_locale";
  DROP TYPE "public"."enum_people_blocks_rich_text_max_width";
  DROP TYPE "public"."enum_people_blocks_image_block_size";
  DROP TYPE "public"."enum_people_blocks_two_column_layout";
  DROP TYPE "public"."enum_people_blocks_video_embed_platform";
  DROP TYPE "public"."enum_people_blocks_quote_size";
  DROP TYPE "public"."enum_people_blocks_divider_spacing";
  DROP TYPE "public"."enum_friends_type";
  DROP TYPE "public"."enum_authentication_requests_categories";
  DROP TYPE "public"."enum_authentication_requests_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_redirects_type";`)
}
