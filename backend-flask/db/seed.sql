-- this file was manually created
INSERT INTO public.users (display_name, email,  handle, cognito_user_id)
VALUES
  ('Jose Vera', 'veral.jose@gmail.com', 'chivondo' ,'MOCK'),
  ('Rafael Lanz', 'el_chivo01@hotmail.com', 'rafael' ,'MOCK');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'chivondo' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )
