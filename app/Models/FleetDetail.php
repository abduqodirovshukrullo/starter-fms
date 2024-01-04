<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class FleetDetail
 * 
 * @property int $id
 * @property string $name
 * @property int $fleet_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property Fleet $fleet
 * @property User|null $user
 *
 * @package App\Models
 */
class FleetDetail extends Model
{
	protected $table = 'fleet_details';
	protected $perPage = 10;

	protected $casts = [
		'fleet_id' => 'int',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'name',
		'fleet_id'
	];

	public function fleet()
	{
		return $this->belongsTo(Fleet::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}
}
