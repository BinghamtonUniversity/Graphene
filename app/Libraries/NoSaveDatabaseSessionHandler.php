<?php

namespace App\Libraries;

use Illuminate\Session\DatabaseSessionHandler;
use Illuminate\Database\ConnectionInterface;

class NoSaveDatabaseSessionHandler extends DatabaseSessionHandler
{
    /**
     * Create a new no-save database session handler instance.
     *
     * @param  \Illuminate\Database\ConnectionInterface  $connection
     * @param  string  $table
     * @param  int  $minutes
     * @return void
     */
    public function __construct(ConnectionInterface $connection, $table, $minutes)
    {
        parent::__construct($connection, $table, $minutes);
    }

    /**
     * Write the session data to the database (skipped for read-only).
     *
     * @param  string  $sessionId
     * @param  string  $data
     * @return bool
     */
    public function write($sessionId, $data): bool
    {
        // Skip writing to prevent UPDATE queries
        return true;
    }
}