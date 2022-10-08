export interface User {
    id_user: number;
    first_name: string;
    last_name: string | null;
    phone_number: string;
    avatar_url: string | null;
    vk_user_id: number | null;
}