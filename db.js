/* =========================================================
   DATABASE & BACKEND BRIDGE (Supabase Integration)
   ========================================================= */

// 1. Supabase Initialization (Make sure supabase-js script is loaded in your HTML head)
const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE'; 'https://qfefkyrwxdhdxyajutst.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE'; 'sb_publishable_mOjSpSn12VMJMf-0WWcDFg_h0u-YL5c';

// Initialize Supabase Client (Agar global supabase object available hai)
const _supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

/**
 * Check if a user is currently logged in
 * @returns {Promise<Object|null>} User object or null
 */
async function checkUserSession() {
    if (!_supabase) return null;
    const { data: { session }, error } = await _supabase.auth.getSession();
    if (error) {
        console.error("Session Error:", error.message);
        return null;
    }
    return session ? session.user : null;
}

/**
 * Generic function to fetch data from any Supabase table
 * @param {string} tableName - Name of the table in Supabase
 * @returns {Promise<Array>} Data rows
 */
async function fetchTableData(tableName) {
    if (!_supabase) return [];
    const { data, error } = await _supabase.from(tableName).select('*');
    if (error) {
        console.error(`Error fetching ${tableName}:`, error.message);
        return [];
    }
    return data;
}

/**
 * Generic function to insert data into any Supabase table
 * @param {string} tableName - Name of the table
 * @param {Object} payload - Data object to insert
 */
async function insertTableData(tableName, payload) {
    if (!_supabase) return { success: false, error: "Supabase not initialized" };
    const { data, error } = await _supabase.from(tableName).insert([payload]);
    if (error) {
        console.error(`Error inserting into ${tableName}:`, error.message);
        return { success: false, error: error.message };
    }
    return { success: true, data };
}

