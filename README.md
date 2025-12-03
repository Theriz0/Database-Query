# Database-Query

This project implements complex MongoDB aggregation pipeline queries using the University Database (univDB) model.
All work was completed using mongosh 5.0 on a Debian-based Linux system, with multi-collection joins, nested document handling, and SQL-to-NoSQL query translation.

For this project, the relational structure was mapped into MongoDB collections using embedded documents.
My task was to write mongosh aggregation pipelines that replicate relational queries across multiple collections.
The queries involve:

$lookup joins (2–4 collections)

$match filtering

$project field reshaping

$unwind array expansion

$group for distinct results

Nested document projections

Each question required producing only the mongosh statements, not the execution results.

All queries were executed in Linux using the mongosh shell.

Development Environment

OS: Debian-based Linux (Debian / Ubuntu / Kali / Pop!_OS / Mint)

MongoDB Server: 5.0 Community Edition

MongoDB Shell: mongosh 5.0

Tools: Linux terminal, APT package manager, MongoDB utilities


MongoDB 5.0 must be installed from MongoDB’s official APT repository.

1. Import the GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

2. Add the MongoDB 5.0 APT repository
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/debian bullseye/mongodb-org/5.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

3. Update package lists
sudo apt update

4. Install MongoDB 5.0
sudo apt install -y mongodb-org

5. Start + enable MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

6. Confirm installation
mongo --version
