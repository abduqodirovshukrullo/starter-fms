<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Activity
 * 
 * @property int $id
 * @property string $name
 * @property int $status
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property User|null $user
 * @property Collection|FleetActivity[] $fleet_activities
 *
 * @package App\Models
 */
class Activity extends Model
{
	protected $table = 'activities';
	protected $perPage = 10;

	protected $casts = [
		'status' => 'int',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'name',
		'status'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}

	public function fleet_activities()
	{
		return $this->hasMany(FleetActivity::class);
	}
}
