<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class FleetActivity
 * 
 * @property int $id
 * @property int $fleet_id
 * @property int $activity_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property Fleet $fleet
 * @property Activity $activity
 * @property User|null $user
 * @property Collection|Path[] $paths
 * @property Collection|ActivityLog[] $activity_logs
 *
 * @package App\Models
 */
class FleetActivity extends Model
{
	protected $table = 'fleet_activities';
	protected $perPage = 10;

	protected $casts = [
		'fleet_id' => 'int',
		'activity_id' => 'int',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'fleet_id',
		'activity_id'
	];

	public function fleet()
	{
		return $this->belongsTo(Fleet::class);
	}

	public function activity()
	{
		return $this->belongsTo(Activity::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}

	public function paths()
	{
		return $this->hasMany(Path::class);
	}

	public function activity_logs()
	{
		return $this->hasMany(ActivityLog::class);
	}
}
