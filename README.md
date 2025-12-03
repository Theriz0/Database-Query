# Database-Query

This project implements **complex MongoDB aggregation pipeline queries** using a simulated **University Database (univDB)** model. The core task involved translating multi-collection relational queries into robust NoSQL aggregation pipelines.
---

## Project Goals & Techniques

The primary objective was to master advanced MongoDB aggregation by replicating sophisticated relational queries against a dataset where the original relational structure was mapped using **embedded documents**.

| Aggregation Stage | Description |
| :--- | :--- |
| **`$lookup` Joins** | Implementing joins across **2 to 4 collections** to link data in a multi-collection environment. |
| **`$match` Filtering** | Applying efficient criteria to filter documents at various stages of the pipeline. |
| **`$project` Reshaping** | Creating, renaming, and omitting fields to reshape the output documents, including **nested document projections**. |
| **`$unwind` Expansion** | Deconstructing array fields to process elements individually. |
| **`$group` Distinct/Aggregation** | Grouping documents to find distinct results and perform aggregate calculations. |

---

## Development Environment

All work was completed in a **Debian-based Linux** environment using the official MongoDB 5.0 server and shell.

| Component | Version/Specification |
| :--- | :--- |
| **Operating System** | Debian-based Linux (Debian / Ubuntu / Kali / Pop!\_OS / Mint) |
| **MongoDB Server** | 5.0 Community Edition |
| **MongoDB Shell** | `mongosh` 5.0 |
| **Tools Used** | Linux Terminal, APT Package Manager |

---

## MongoDB 5.0 Installation Guide (Debian/Ubuntu)

The following steps were used to set up the required environment:

### 1. Install MongoDB Server 5.0

```bash
# 1. Import the GPG key
wget -qO - [https://www.mongodb.org/static/pgp/server-5.0.asc](https://www.mongodb.org/static/pgp/server-5.0.asc) | sudo apt-key add -

# 2. Add the MongoDB 5.0 APT repository
echo "deb [ arch=amd64 ] [https://repo.mongodb.org/apt/debian](https://repo.mongodb.org/apt/debian) bullseye/mongodb-org/5.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

# 3. Update package lists
sudo apt update

# 4. Install MongoDB 5.0
sudo apt install -y mongodb-org

# 5. Start and Enable MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# 6. Confirm installation
mongo --version
```
