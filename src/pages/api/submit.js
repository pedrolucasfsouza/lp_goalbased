import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://jhprjmmnurpybnmdkojp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpocHJqbW1udXJweWJubWRrb2pwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzg1OTU0NCwiZXhwIjoyMDA5NDM1NTQ0fQ.Z1716Z6FSWN1EJ7RSqsRBOAR415l8i-O4zlxtZsWaiM'
);

export async function submitData(dataPost) {
  try {
    const { data, error } = await supabase
    .from('leads')
    .insert([
      {...dataPost, origem: 'marlon', campanha: dataPost.utm_campaign, conteudo: dataPost.utm_content },
    ])
    .select()

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    throw { error: 'Erro ao inserir dados no banco de dados.' };
  }
}