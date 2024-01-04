<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Path
 * 
 * @property int $id
 * @property float $lat
 * @property float $long
 * @property int $fleet_activity_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property FleetActivity $fleet_activity
 * @property User|null $user
 *
 * @package App\Models
 */
class Path extends Model
{
	protected $table = 'path';
	protected $perPage = 10;

	protected $casts = [
		'lat' => 'float',
		'long' => 'float',
		'fleet_activity_id' => 'int',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'lat',
		'long',
		'fleet_activity_id'
	];

	public function fleet_activity()
	{
		return $this->belongsTo(FleetActivity::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}
}
