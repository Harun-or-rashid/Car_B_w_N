<?php

use App\Models\Admin;
use Carbon\Carbon;
use Database\Seeders\IncomeTypeSeeder;
use Database\Seeders\PermissionTableSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function run() {
        $this->call(PermissionTableSeeder::class);
        $this->call(IncomeTypeSeeder::class);
		$admin = Admin::where('email', 'admin@admin.com')->get();
		if ($admin->count() == 0) {
			$admin = Admin::create([
				'name' => 'Admin',
				'role_id' => 1,
				'email' => 'admin@admin.com',
				'email_verified_at' => Carbon::now(),
				'password' => bcrypt('111111'),
				'status' => 1,
				'created_at' => Carbon::now(),
				'updated_at' => Carbon::now(),
			]);

			if ($admin->wasRecentlyCreated) {
				$admin->attachRole($admin->role_id);
			}
		}

	}
}
