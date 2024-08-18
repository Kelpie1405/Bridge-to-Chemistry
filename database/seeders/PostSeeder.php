<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->insert([
            'title' => '水素原子同士はなぜ結合するのか？',
            'lede' => '全ての原子は、原子同士が結合して分子を構成するものと、結合せずに原子単体として存在するものに大きく分かれます。ここでは、水素原子を例として、なぜ結合するかをエネルギー軌道の観点から考えます！',
            'body' => '<h4>原子軌道と分子軌道</h4>
                       <p>水素原子は、それぞれ1つの電子を持っています。この電子は、1s軌道と呼ばれる空間を占めています。
                       2つの水素原子が近づくと、お互いの1s軌道が重なり合います。
                       この重なりによって、新しい2つの軌道ができます。これを「分子軌道」と呼びます。</p>
                       <h4>分子軌道のエネルギー準位</h4>
                       <p>2つの新しい分子軌道は、それぞれ異なるエネルギー準位を持っています<br>
                       1. 結合性軌道（1σg軌道）：これは、元の1s軌道よりエネルギーが低い軌道です。2つの原子軌道が強め合って、電子がより安定した状態になります。<br>
                       2. 反結合性軌道（1σu軌道）：これは、元の1s軌道よりエネルギーが高い軌道です。2つの原子軌道が弱め合って、電子が不安定になります。</p>
                       <h4>電子の配置</h4>
                       <p>水素分子を形成する際、2つの電子はエネルギーが低い結合性軌道（1σg軌道）に入ります。
                       パウリの排他原理により、1つの軌道には最大2つの電子が収まります。
                       この場合、両方の電子が安定した状態に入るため、結合が形成されます</p>
                       <h4>結論</h4>
                       <p>つまり、水素原子同士が結合するのは、2つの電子が結合性軌道に入ることで、元の状態よりもエネルギー的に安定するからです。これが、水素分子（H₂）が形成される理由です。</p>
                       <h4>まとめ</h4>
                       <p>・水素原子の1s軌道が重なり、2つの新しい分子軌道（結合性軌道と反結合性軌道）ができる。<br>
                       ・結合性軌道はエネルギーが低く、電子が入ると安定する。<br>
                       ・反結合性軌道はエネルギーが高く、不安定。<br>
                       ・2つの電子が結合性軌道に入ることで、水素分子がエネルギー的に安定し、結合が形成される。</p>',
            'image' => 'https://res.cloudinary.com/dghx8vbna/image/upload/v1722240736/%E7%89%A9%E5%8C%96%EF%BC%BF%E4%B8%AD_ox5izb.jpg',
            'category_id' => '1',
            'level_id' => '2',
            'field_id' => '1',
            'created_at' => '2024-07-25 15:40:30',
            'updated_at' => '2024-07-25 15:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => '電子の偏り',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'body' => '分極と電気双極子の関係はベクトルで考えろ',
            'image' => 'https://res.cloudinary.com/dghx8vbna/image/upload/v1723622626/%E7%89%A9%E5%8C%96%EF%BC%BF%E3%83%86%E3%82%B9%E3%83%88_ufl1pq.jpg',
            'category_id' => '1',
            'level_id' => '1',
            'field_id' => '1',
            'created_at' => '2024-07-20 15:40:30',
            'updated_at' => '2024-07-20 15:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'テスト（有機初級）',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://res.cloudinary.com/dghx8vbna/image/upload/v1723622627/%E6%9C%89%E5%8C%96%EF%BC%BF%E3%83%86%E3%82%B9%E3%83%88_bjzef7.jpg',
            'category_id' => '1',
            'level_id' => '1',
            'field_id' => '3',
            'created_at' => '2024-07-10 10:00:30',
            'updated_at' => '2024-07-10 10:00:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'テスト（無機上級）',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://res.cloudinary.com/dghx8vbna/image/upload/v1723622626/%E7%84%A1%E5%8C%96%EF%BC%BF%E3%83%86%E3%82%B9%E3%83%88_gztmgz.jpg',
            'category_id' => '1',
            'level_id' => '3',
            'field_id' => '2',
            'created_at' => '2024-07-05 00:30:00',
            'updated_at' => '2024-07-05 00:30:00',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'コラム１',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://res.cloudinary.com/dghx8vbna/image/upload/v1723622627/%E6%9C%89%E5%8C%96%EF%BC%BF%E3%83%86%E3%82%B9%E3%83%88_bjzef7.jpg',
            'category_id' => '2',
            'created_at' => '2024-07-20 19:40:30',
            'updated_at' => '2024-07-20 19:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'コラム2',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://res.cloudinary.com/dghx8vbna/image/upload/v1723622626/%E7%89%A9%E5%8C%96%EF%BC%BF%E3%83%86%E3%82%B9%E3%83%88_ufl1pq.jpg',
            'category_id' => '2',
            'created_at' => '2024-07-21 19:40:30',
            'updated_at' => '2024-07-21 19:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'コラム3',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://res.cloudinary.com/dghx8vbna/image/upload/v1723622626/%E7%84%A1%E5%8C%96%EF%BC%BF%E3%83%86%E3%82%B9%E3%83%88_gztmgz.jpg',
            'category_id' => '2',
            'created_at' => '2024-07-22 10:40:30',
            'updated_at' => '2024-07-22 10:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'コラム4',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://res.cloudinary.com/dghx8vbna/image/upload/v1723622627/%E6%9C%89%E5%8C%96%EF%BC%BF%E3%83%86%E3%82%B9%E3%83%88_bjzef7.jpg',
            'category_id' => '2',
            'created_at' => '2024-07-23 00:40:30',
            'updated_at' => '2024-07-23 00:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'テスト（分析中級）',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://res.cloudinary.com/dghx8vbna/image/upload/v1723622626/%E7%84%A1%E5%8C%96%EF%BC%BF%E3%83%86%E3%82%B9%E3%83%88_gztmgz.jpg',
            'category_id' => '1',
            'level_id' => '2',
            'field_id' => '4',
            'created_at' => '2024-07-01 00:00:00',
            'updated_at' => '2024-07-01 00:00:00',
        ]);
    }
}
