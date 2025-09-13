// app/profiles/page.tsx
import Link from 'next/link';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type User = { id:number; name:string; email:string; bio:string; posts:{id:number; title:string; body:string}[] };

const users: User[] = [
  {
    id: 1,
    name: 'Matus',
    email: 'matus@example.com',
    bio: 'Computer engineering & AI enthusiast',
    posts: [
      { id: 101, title: 'My First Demo', body: 'ลองทำ Next.js + Vercel...' },
      { id: 102, title: 'Daily Goal', body: 'กำลังสร้างแอปติดตามเป้าหมายส่วนตัว' },
    ],
  },
  {
    id: 2,
    name: 'Oaktora',
    email: 'friend@example.com',
    bio: 'Just hanging around',
    posts: [
      { id: 201, title: 'Hello World', body: 'โพสต์ทดสอบเฉย ๆ' },
    ],
  },
];

export default function ProfilesPage() {
  return (
    <section>
      <h1 style={{ marginBottom: 12 }}>Profiles</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 16
      }}>
        {users.map(u => (
          <article key={u.id} className="card" style={{ padding: 16 }}>
            <header style={{ display:'flex', gap:12, alignItems:'center', marginBottom:8 }}>
              <div style={{
                width:40, height:40, borderRadius:9999, background:'#eee',
                display:'grid', placeItems:'center', fontWeight:700
              }}>
                {u.name[0].toUpperCase()}
              </div>
              <div>
                <h2 style={{ margin:0, fontSize:18 }}>{u.name}</h2>
                <div style={{ color:'#666', fontSize:13 }}>{u.email}</div>
              </div>
            </header>

            <p style={{ marginBottom:8, color:'#666' }}>{u.bio}</p>

            <h3 style={{ fontSize:14, margin:'8px 0' }}>Posts</h3>
            {u.posts.length === 0 ? (
              <p style={{ color:'#666', margin:0 }}>ยังไม่มีโพสต์</p>
            ) : (
              <ul style={{ fontSize:14, paddingLeft:16 }}>
                {u.posts.map(p => (
                  <li key={p.id}>
                    <Link href={`/posts/${p.id}`}><b>{p.title}</b></Link>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
