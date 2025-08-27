#!/bin/bash
# Simple backup script for terminal website
BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp -r ../* "$BACKUP_DIR/"
echo "Backup created in: $BACKUP_DIR"
